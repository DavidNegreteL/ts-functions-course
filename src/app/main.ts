/**
 * Faker Library create random set of values for testing propose
 */
import { faker } from '@faker-js/faker';
import {
  addProduct,
  products,
  updateProduct,
  findProducts,
} from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['M', 'S', 'L', 'XL']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 560,
});

findProducts({
  stock: 10,
  color: 'red',
});
