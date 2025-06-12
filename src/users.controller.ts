import { Body, Controller, Post } from "@nestjs/common";

@Controller("/users")
export class UsersController {

  @Post()
  async newUser(@Body() userData){
    return userData;
  };

}