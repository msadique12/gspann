import pool from '../config/db.js';

export const getProductsFromDB = async (page, limit) => {
  const offset = (page - 1) * limit;
  const query = "SELECT * FROM products ORDER BY id LIMIT $1 OFFSET $2";
  const result = await pool.query(query, [limit, offset]);

  return result.rows;
};
