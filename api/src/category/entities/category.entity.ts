import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  categoryId: number;

  @Column()
  categoryName: string;

  @Column()
  restaurantId: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
