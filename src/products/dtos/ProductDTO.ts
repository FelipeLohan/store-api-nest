import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { CharacteristicsProductDTO } from './CharacteristicsProductDTO';
import { ImageProductDTO } from './ImageProductDTO';
import { Type } from 'class-transformer';

export class ProductDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  value: number;

  @Min(1)
  quantity: number;

  @IsString()
  description: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CharacteristicsProductDTO)
  characteristics: CharacteristicsProductDTO[];

  @IsArray()
  @Type(() => ImageProductDTO)
  images: ImageProductDTO[];

  @IsString()
  categories: string;
}
