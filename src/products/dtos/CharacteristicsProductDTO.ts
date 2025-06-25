import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ProductEntity } from '../products.entity';

export class CharacteristicsProductDTO {
  @IsOptional()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  product: ProductEntity;
}
