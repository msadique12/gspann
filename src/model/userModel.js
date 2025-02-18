import pool from '../config/db.js';

export const createUser = async (firstName, email, hashedPassword) => {
  const query = `
    INSERT INTO users (first_name, email, password) 
    VALUES ($1, $2, $3) 
    RETURNING id, first_name, email`;
  
  const result = await pool.query(query, [firstName, email, hashedPassword]);
  return result.rows[0];
};

export const getUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  const result = await pool.query(query, [email]);
  return result.rows[0];
};
