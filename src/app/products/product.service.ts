import { ProductInterface } from './product.model';
import { CreateProductDto, updateProductDto } from './product.dto';
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

export const updateProduct = (
  id: string | number,
  changes: updateProductDto
): ProductInterface => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
};
