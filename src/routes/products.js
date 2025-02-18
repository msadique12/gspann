import express from 'express';
import { getProducts } from '../controllers/productController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/products', verifyToken, getProducts);

export default router;
