import { ProductInterface } from './product.model';
import { CreateProductDto } from './product.dto';
import { faker } from '@faker-js/faker';
export const products: ProductInterface[] = [];

export const addProduct = (data: CreateProductDto): ProductInterface => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (id: string, changes: ProductInterface) => {
  //*TODO CODE
};
