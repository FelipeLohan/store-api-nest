import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async listAllProducts() {
    const productList = await this.productRepository.find();

    return productList;
  }

  async createProduct(newProduct: ProductEntity) {
    const savedProcuct = await this.productRepository.save(newProduct);

    return savedProcuct;
  }

  async updateProduct(id: string, updatedProduct: Partial<ProductEntity>) {
    await this.productRepository.update(id, updatedProduct);

    const product = await this.productRepository.findOneBy({ id: id });

    return product;
  }

  async deleteProduct(id: string) {
    return await this.productRepository.delete(id);
  }
}
