import { ProductInterface } from './product.model';

export const products: ProductInterface[] = [];

export const addProduct = (data: ProductInterface) => {
  products.push(data);
};
