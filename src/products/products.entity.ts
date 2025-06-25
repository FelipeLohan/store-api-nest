import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductCharacteristicsEntity } from './product-characteristics.entity';
import { ProductImageEntity } from './product-images.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'price', nullable: false })
  value: number;

  @Column({ name: 'quantity', nullable: false })
  quantity: number;

  @Column({ name: 'description', length: 255, nullable: false })
  description: string;

  @Column({ name: 'categories', length: 255, nullable: false })
  categories: string;

  @OneToMany(
    () => ProductCharacteristicsEntity,
    (productCharacteristics) => productCharacteristics.product,
    { cascade: true, eager: true },
  )
  characteristics: ProductCharacteristicsEntity[];

  @OneToMany(() => ProductImageEntity, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images: ProductImageEntity[];
}
