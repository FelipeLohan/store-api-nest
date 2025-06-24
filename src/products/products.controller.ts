import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { ProductDTO } from './dtos/ProductDTO';
import { ProductEntity } from './products.entity';
import { v4 as uuid } from 'uuid';
import { UpdateProductDTO } from './dtos/UpdateProductDTO';
import { ProductService } from './product.service';

@Controller('/products')
export class ProductsController {
  constructor(private productRepo: ProductsRepository, private productService: ProductService) {}

  @Post()
  async newProduct(@Body() productData: ProductDTO) {
    const product: ProductEntity = { ...productData, id: uuid() };

    this.productService.createProduct(product);

    return {
      message: 'sucess',
      status: 200,
      data: product,
    };
  }

  @Get()
  async findAll() {

    const productsData = await this.productService.listAllProducts();

    return {
      message: 'sucess',
      status: 200,
      data: productsData,
    };
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() productData: UpdateProductDTO,
  ) {
    const updatedProduct = await this.productService.updateProduct(id, productData);

    return {
      message: 'success',
      status: 201,
      data: updatedProduct,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    await this.productService.deleteProduct(id);

    return {
      message: "sucess",
      status: 204,
      data: {}
    };
  }

}
