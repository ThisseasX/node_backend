const parse = url => {
  const [
    ,
    user = process.env.DB_USER,
    password = process.env.DB_PASS,
    host = process.env.DB_HOST,
    database = process.env.DB_SCHEMA,
  ] = /mysql:\/\/(.+?):(.+?)@(.+?)\/(.+?)\?/.exec(url) || [];

  return { user, password, host, database };
};

const config = parse(process.env.CLEARDB_DATABASE_URL);

export default config;
