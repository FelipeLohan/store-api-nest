import { IsOptional, IsString } from 'class-validator';
import { ProductEntity } from '../products.entity';

export class ImageProductDTO {
  @IsOptional()
  id: string;

  @IsString()
  url: string;

  @IsString()
  description: string;

  @IsOptional()
  product: ProductEntity;
}
