import db from './connection';

const query = (queryString, params) =>
  new Promise((resolve, reject) => {
    db.query(queryString, params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

const findAll = table => {
  return query(`SELECT * FROM ${table}`);
};

const findById = (table, id, idColumn = 'id') => {
  return query(`SELECT * FROM ${table} WHERE ${idColumn}=${id}`);
};

const find = (table, id, idColumn) => {
  return !id ? findAll(table) : findById(table, id, idColumn);
};

const insert = (table, entity) => {
  const columns = Object.keys(entity).join(',');
  const values = Object.keys(entity)
    .map(() => '?')
    .join(',');

  const queryString = `INSERT INTO ${table}(${columns}) values(${values})`;

  return query(queryString, Object.values(entity));
};

export { query, find, insert };
