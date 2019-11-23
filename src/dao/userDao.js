import { find, insert } from '../db-utils';

const findAllUsers = () => {
  return find('users');
};

const saveUser = user => {
  return insert('users', user);
};

export { findAllUsers, saveUser };
