
export class UsersRepository{
  private usersData: any = [];

  async save(usersData){
    this.usersData.push(usersData);

    console.log(this.usersData);
  };

  async listAll() {
    return this.usersData;
  }
}