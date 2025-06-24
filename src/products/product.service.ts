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

  async listAllProducts(){
    const productList = await this.productRepository.find();

    return productList;
  }

  async createProduct(newProduct: ProductEntity){
    const savedProcuct = await this.productRepository.save(newProduct);

    return savedProcuct;
  }

  async updateProduct(id: string, updatedProduct: Partial<ProductEntity>){
    const productUpdate = await this.productRepository.update(id, updatedProduct)

    return productUpdate
  }

  async deleteProduct(id: string){
    return await this.productRepository.delete(id);
  }
}