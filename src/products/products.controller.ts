import { Body, Controller, Post, Get } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { ProductDTO } from "./dtos/ProductDTO";

@Controller("/products")
export class ProductsController{

  constructor(private productRepo: ProductsRepository){}

  @Post()
  async newProduct(@Body() product: ProductDTO){
    this.productRepo.save(product);

    return product;
  }

  @Get()
  async findAll() {
    return this.productRepo.listAll();
  }
}