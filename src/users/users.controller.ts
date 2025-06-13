import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { UserDTO } from "./dtos/UserDTO";

@Controller("/users")
export class UsersController {

  constructor(private userRepo: UsersRepository){}

  @Post()
  async newUser(@Body() userData: UserDTO){
    this.userRepo.save(userData);

    return userData;
  };

  @Get()
  async listAllUsers() {
    return this.userRepo.listAll();
  }
}