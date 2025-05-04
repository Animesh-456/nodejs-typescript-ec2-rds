import { pool } from '../db';

export const getUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;
};

export const createUser = async (name: string, email: string) => {
  await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
};
