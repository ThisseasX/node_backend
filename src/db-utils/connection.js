import mysql from 'mysql';
import config from './config';

const pool = mysql.createPool({
  connectionLimit : 10,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

export default pool;
