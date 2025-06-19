import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { UserEntity } from "./users.entity";
import { UserDTO } from "./dtos/UserDTO";
import { v4 as uuid } from "uuid";

@Controller("/users")
export class UsersController {

  constructor(private userRepo: UsersRepository){}

  @Post()
  async newUser(@Body() userData: UserDTO){
    const userEntity: UserEntity = { ...userData , id: uuid() };

    this.userRepo.save(userEntity);

    return userEntity;
  };

  @Get()
  async listAllUsers() {
    return this.userRepo.listAll();
  }
}