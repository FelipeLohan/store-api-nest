class CharacteristicsProduct {
  name: string;
  description: string;
}

class ImageProduct {
  url: string;
  description: string;
}

export class ProductEntity {
  id: string;
  name: string;
  value: number;
  quantity: number;
  description: string;
  categories: string;
  characteristics: CharacteristicsProduct[];
  images: ImageProduct[];
}