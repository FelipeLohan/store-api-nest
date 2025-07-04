import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "users"})
export class UserEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: "name", length: 100, nullable: false})
  name: string;

  @Column({name: "email", length: 70, nullable: false})
  email: string;

  @Column({name: "password", length: 255, nullable: false})
  password: string;

  @CreateDateColumn({name: "created_at"})
  createAt?: string;

  @UpdateDateColumn({name: "updated_at"})
  updatedAt?: string;

  @DeleteDateColumn({name: "deleted_at"})
  deletedAt?: string;
}