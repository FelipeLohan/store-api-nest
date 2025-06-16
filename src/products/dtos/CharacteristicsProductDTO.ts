import { IsNotEmpty, IsString } from "class-validator";

export class CharacteristicsProductDTO{

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}