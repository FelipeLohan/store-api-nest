import { Injectable } from "@nestjs/common";
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

  async update(id: string , body: Partial<UserEntity>){
    const savedUser = this.usersData.find(
        user => user.id === id
    );

    if(!savedUser) {
        throw new Error('Usuário não existe');
    }

    Object.entries(body).forEach(([key, value]) => {
        if(key === 'id') {
            return;
        }

        savedUser[key] = value;
    });

    return savedUser;
  }

  async emailExits(email){
    const user = this.usersData.find(user => user.email === email);

    return user !== undefined;
  }
}