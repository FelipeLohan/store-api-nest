import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersRepository } from "./users.repository";
import { UniqueUserEmailValidator } from "./validators/unique-user-email.validator";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./users.entity";
import { UserService } from "./users.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersRepository, UniqueUserEmailValidator, UserService]
})
export class UsersModule {}