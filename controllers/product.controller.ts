import { Request, Response } from 'express';
import { ProductService } from '../service/product.service';

const productService = new ProductService();

export class ProductController {
    async createProduct(req: Request, res: Response) {
        const { name, price } = req.body;
        try {
            const { product } = await productService.createProduct(name, price);
            res.status(201).json({ product });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async findProduct(req: Request, res: Response) {
        const { name } = req.body;
        try {
            const { product } = await productService.findProduct(name);
            res.json({ product });
        } catch (error: any) {
            res.status(404).json({ message: error.message });
        }
    }

    async updateProduct(req: Request, res: Response) {
        const { name, price } = req.body;
        try {
            const { product } = await productService.updateProduct(name, price);
            res.json({ product });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteProduct(req: Request, res: Response) {
        const { name } = req.body;
        try {
            const { product } = await productService.deleteProduct(name);
            res.json({ product });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}