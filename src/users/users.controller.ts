import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserEntity } from './users.entity';
import { UserDTO } from './dtos/UserDTO';
import { v4 as uuid } from 'uuid';
import { UserListDTO } from './dtos/UserListDTO';
import { UpdateUserDTO } from './dtos/UpdateUserDTO';
import { UserService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(
    private userRepo: UsersRepository,
    private userService: UserService
  ) {}

  @Post()
  async newUser(@Body() userData: UserDTO) {
    const userEntity: UserEntity = { ...userData, id: uuid() };

    const newUser = this.userService.createUser(userEntity);

    return newUser;
  }

  @Get()
  async listAllUsers() {
    const savedUsers: UserListDTO[] = await this.userService.listAllUsers()
    
    return savedUsers;
  }

  @Put("/:id")
  async updateUser(@Param("id") id: string , @Body() body: UpdateUserDTO){
    const updatedUser = this.userRepo.update(id, body);

    return{
      message: "sucess",
      status: 200,
      data: updatedUser
    }
  }

  @Delete("/:id")
  async deleteUser(@Param("id") id: string){
    this.userRepo.delete(id);

    return{
      message: "success",
      status: 204,
      data: {}
    }
  }
}
