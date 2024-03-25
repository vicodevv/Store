const Product = require('../models/product.model');

export class ProductService {
  async createProduct(name: string, price: number): Promise<{ product: any }> {
    const product = new Product({
      name,
      price,
    });

    await product.save();
    return { product };
  }

  async findProduct(name: string): Promise<{ product: any }> {
    const product = await Product.findOne({ name });
    if (!product) {
      throw new Error('Product not found');
    }
    return { product };
  }

  async updateProduct(name: string, price: number): Promise<{ product: any }> {
    const product = await Product.findOne({ name });
    if (!product) {
      throw new Error('Product not found');
    }
    product.price = price;
    await product.save();
    return { product };
  }

  async deleteProduct(name: string): Promise<{ product: any }> {
    const product = await Product.findOne({ name });
    if (!product) {
      throw new Error('Product not found');
    }
    await product.remove();
    return { product };
  }
}