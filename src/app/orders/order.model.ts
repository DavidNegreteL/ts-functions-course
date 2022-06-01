import { User } from '../../01-enum';
import { ProductInterface } from './../products/product.model';
import { BaseModel } from '../base.model';
export interface Order extends BaseModel {
  products: ProductInterface[];
  user: User;
}
