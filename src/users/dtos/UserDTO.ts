import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validators/unique-user-email.validator';

export class UserDTO {
  @IsString({ message: 'O nome deve ser uma String.' })
  @IsNotEmpty({ message: 'O nome é obrigatório. ' })
  name: string;

  @IsEmail(undefined, { message: 'Esse email é inválido.' })
  @IsUniqueEmail({message: "Esse email já está cadastrado."})
  email: string;

  @MinLength(6, { message: 'A senha deve conter no mínimo 6 caracteres' })
  password: string;
}
