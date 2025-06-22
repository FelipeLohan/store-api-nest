import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

class CharacteristicsProduct {
  name: string;
  description: string;
}

class ImageProduct {
  url: string;
  description: string;
}

@Entity({ name: "products" })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: "name", length: 100, nullable: false })
  name: string;

  @Column({ name: "price", nullable: false })
  value: number;

  @Column({ name: "quantity", nullable: false })
  quantity: number;

  @Column({ name: "description", length: 255, nullable: false })
  description: string;

  @Column({ name: "categories", length: 255, nullable: false })
  categories: string;

  
  //characteristics: CharacteristicsProduct[];
  //images: ImageProduct[];
}