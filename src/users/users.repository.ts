import { Injectable } from "@nestjs/common";
import { UserDTO } from "./dtos/UserDTO";
import { UserEntity } from "./users.entity";

@Injectable()
export class UsersRepository{
  private usersData: UserEntity[] = [];

  async save(usersData: UserEntity){
    this.usersData.push(usersData);

    console.log(this.usersData);
  };

  async listAll() {
    return this.usersData;
  }

  async emailExits(email){
    const user = this.usersData.find(user => user.email === email);

    return user !== undefined;
  }
}