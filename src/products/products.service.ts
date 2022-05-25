import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const productId = Math.random().toString();
    const newProduct = new Product(productId, title, description, price);
    this.products.push(newProduct);
    return productId;
  }

  fetchProduct() {
    return [...this.products];
  }

  fetchSingleProduct(id: string) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return { ...product };
  }
}
