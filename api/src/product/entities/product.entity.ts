import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column()
  productName: string;

  @Column()
  productDescription: string;

  @Column()
  productPrice: number;

  @Column()
  categoryId: string;

  @Column()
  restaurantId: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
