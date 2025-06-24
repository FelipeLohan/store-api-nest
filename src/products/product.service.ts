import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./products.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>
  ){}

  async createProduct(newProduct: ProductEntity){
    const savedProcuct = await this.productRepository.save(newProduct);

    return savedProcuct;
  }

  async updateProduct(id: string, updatedProduct: Partial<ProductEntity>){
    return await this.productRepository.update(id, updatedProduct)
  }
}