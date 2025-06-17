import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersRepository } from "./users.repository";
import { UniqueUserEmailValidator } from "./validators/unique-user-email.validator";

@Module({
  controllers: [UsersController],
  providers: [UsersRepository, UniqueUserEmailValidator]
})
export class UsersModule {}