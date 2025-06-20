import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { ProductDTO } from './dtos/ProductDTO';
import { ProductEntity } from './products.entity';
import { v4 as uuid } from 'uuid';
import { UpdateProductDTO } from './dtos/UpdateProductDTO';

@Controller('/products')
export class ProductsController {
  constructor(private productRepo: ProductsRepository) {}

  @Post()
  async newProduct(@Body() productData: ProductDTO) {
    const product: ProductEntity = { ...productData, id: uuid() };

    this.productRepo.save(product);

    return {
      message: 'sucess',
      status: 200,
      data: product,
    };
  }

  @Get()
  async findAll() {

    const productsData = await this.productRepo.listAll();

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
    const updatedProduct = await this.productRepo.update(id, productData);

    return {
      message: 'success',
      status: 201,
      data: updatedProduct,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    await this.productRepo.remove(id);

    return {
      message: "sucess",
      status: 204,
      data: {}
    };
  }

}
