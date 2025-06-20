import { Injectable } from '@nestjs/common';
import { ProductEntity } from './products.entity';

@Injectable()
export class ProductsRepository {
  private productsData: ProductEntity[] = [];

  async save(product: ProductEntity) {
    this.productsData.push(product);

    return this.productsData;
  }

  private findById(id: string) {
    const product = this.productsData.find((product) => product.id === id);

    if (!product) {
      throw new Error('Produto não existe');
    }

    return product;
  }

  async listAll() {
    return this.productsData;
  }
}
