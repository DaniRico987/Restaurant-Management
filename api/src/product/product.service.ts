import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAllProducts(): Promise<Product[]> {
    return this.productsRepository.find({
      select: ['productId', 'productName', 'productPrice', 'categoryId'],
    });
  }

  //Encuentra el prodcuto por su id
  findOne(id: number): Promise<Product> {
    return this.productsRepository.findOne({
      select: [
        'productId',
        'productName',
        'productDescription',
        'productPrice',
      ],
      where: { productId: id },
    });
  }
}
