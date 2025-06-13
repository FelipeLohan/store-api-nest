import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersRepository } from "./users.repository";

@Controller("/users")
export class UsersController {

  constructor(private userRepo: UsersRepository){}

  @Post()
  async newUser(@Body() userData){
    this.userRepo.save(userData);

    return userData;
  };

  @Get()
  async listAllUsers() {
    return this.userRepo.listAll();
  }
}