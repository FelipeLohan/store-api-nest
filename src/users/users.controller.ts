import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserEntity } from './users.entity';
import { UserDTO } from './dtos/UserDTO';
import { v4 as uuid } from 'uuid';
import { UserListDTO } from './dtos/UserListDTO';

@Controller('/users')
export class UsersController {
  constructor(private userRepo: UsersRepository) {}

  @Post()
  async newUser(@Body() userData: UserDTO) {
    const userEntity: UserEntity = { ...userData, id: uuid() };

    this.userRepo.save(userEntity);

    return userEntity;
  }

  @Get()
  async listAllUsers() {
    const savedUsers: UserEntity[] = await this.userRepo.listAll();
    
    const usersList: UserListDTO[] = savedUsers.map(
      (user) => new UserListDTO(user.name, user.id),
    );

    return usersList;
  }

 
}
