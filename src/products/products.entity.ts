class CaracteristicaProduto {
  name: string;
  description: string;
}

class ImagemProduto {
  url: string;
  description: string;
}

export class ProdutoEntity {
  id: string;
  userId: string;
  name: string;
  value: number;
  quantity: number;
  description: string;
  categories: string;
  characteristics: CaracteristicaProduto[];
  images: ImagemProduto[];
}