import { getProductsFromDB } from '../models/productModel.js';

export const getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;

  try {
    const products = await getProductsFromDB(page, limit);
    res.json({ products, totalPages: Math.ceil(50 / limit) }); 
  } catch (error) {
    console.error("Fetch Products Error:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};
