import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsersRepository } from "../users.repository";

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueUserEmailValidator implements ValidatorConstraintInterface {

  constructor(private userRepo: UsersRepository){}
  
  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const checkEmailExists = await this.userRepo.emailExits(value);

    return !checkEmailExists
  }

}

export const IsUniqueEmail = (validationOptions: ValidationOptions) => {
  return (obj: Object, property: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: UniqueUserEmailValidator
    })
  }
}