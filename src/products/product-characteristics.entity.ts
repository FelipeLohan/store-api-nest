import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './products.entity';

@Entity({ name: 'product_characteristics' })
export class ProductCharacteristicsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 70, nullable: false })
  name: string;

  @Column({ name: 'description', length: 255, nullable: false })
  description: string;

  @ManyToOne(
    () => ProductEntity,
    (productEntity) => productEntity.characteristics,
    { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  product: ProductEntity;
}
