// src/modules/products/products.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAllProducts(): Promise<Product[]> {
    return this.productService.findAllProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }
}
