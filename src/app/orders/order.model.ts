import { User } from '../../01-enum';
import { ProductInterface } from './../products/product.model';
export interface Order {
  id: string | number;
  createdAt: Date;
  products: ProductInterface[];
  user: User;
}
