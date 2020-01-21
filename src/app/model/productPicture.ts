import {Product} from './product.model';

export interface ProductPicture {
  id: number;
  src: string;
  product: Product;
}
