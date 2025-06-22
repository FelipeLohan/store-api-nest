import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "product_characteristics"})
export class ProductCharacteristics {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({ name: "name", length: 70, nullable: false})
  name: string;

  @Column({ name: "description", length: 255, nullable: false})
  description: string;
}