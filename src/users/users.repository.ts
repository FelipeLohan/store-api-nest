import { Injectable } from "@nestjs/common";
import { UserDTO } from "./dtos/UserDTO";

@Injectable()
export class UsersRepository{
  private usersData: UserDTO[] = [];

  async save(usersData){
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