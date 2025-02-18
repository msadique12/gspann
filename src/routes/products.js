import express from 'express';
import { getProducts } from '../controllers/productController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Protected route
router.get('/products', verifyToken, getProducts);

export default router;
