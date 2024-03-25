import express from 'express';
import { ProductController } from '../controllers/product.controller';

const productRouter = express.Router();
const productController = new ProductController();

// Product routes
productRouter.post('/create', productController.createProduct);
productRouter.get('/find', productController.findProduct);
productRouter.put('/update', productController.updateProduct);
productRouter.delete('/delete', productController.deleteProduct);

export default productRouter;