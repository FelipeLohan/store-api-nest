import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsRepository{
  
  private productsData: Array<any> = []
  
  async save(product){
    this.productsData.push(product);

    console.log(product);
  }

  async listAll(){
    return this.productsData;
  }
}