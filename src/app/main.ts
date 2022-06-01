/**
 * Faker Library create random set of values for testing propose
 */
import { faker } from '@faker-js/faker';
import { addProduct, products } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['M', 'S', 'L', 'XL']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  });
}

console.log(products);
