import { Injectable } from '@nestjs/common';
import { ProductEntity } from './products.entity';

@Injectable()
export class ProductsRepository {
  private productsData: ProductEntity[] = [];

  async save(product: ProductEntity) {
    this.productsData.push(product);

    console.log(this.productsData);

    return product;
  }

  private findById(id: string) {
    const product = this.productsData.find((product) => product.id === id);

    if (!product) {
      throw new Error('Produto não existe');
    }

    return product;
  }

  async update(id: string, body: Partial<ProductEntity>) {
    const notUpdatedData = ['id', 'userId'];
    const product = this.findById(id);
    Object.entries(body).forEach(([key, value]) => {
      if (notUpdatedData.includes(key)) {
        return;
      }
      product[key] = value;
    });

    return product;
  }

  async remove(id: string) {
    const removedProduct = this.findById(id);
    this.productsData = this.productsData.filter(
      (product) => product.id !== id,
    );
    return removedProduct;
  }

  async listAll() {
    return this.productsData;
  }
}
