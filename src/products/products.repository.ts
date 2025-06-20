import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./products.entity";

@Injectable()
export class ProductsRepository{
  
  private productsData: ProductEntity[] = [];
  
  async save(product: ProductEntity){
    this.productsData.push(product);

    return this.productsData;
  }

  
  async listAll(){
    return this.productsData;
  }
}