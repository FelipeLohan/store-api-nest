import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./users.entity";
import { Repository } from "typeorm";
import { UserListDTO } from "./dtos/UserListDTO";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UserService{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ){}

  async listAllUsers(){
    const users = await this.userRepository.find();
    const usersList = users.map( user => new UserListDTO(user.name, user.id));

    return usersList;
  }

  async createUser(newUser: UserEntity){
    const user = await this.userRepository.save(newUser);

    return user;
  }

  async updateUser(id: string , updatedUser: Partial<UserEntity>){
    return await this.userRepository.update(id, updatedUser)
  }

  async deleteUser(id: string){
    return await this.userRepository.delete(id);
  }
}