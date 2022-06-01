import { addProduct } from './products/product.service';

addProduct({
  id: '5dsd-a',
  title: 'T-shirt',
  createdAt: new Date(),
  stock: 1256,
  category: {
    id: 'sdsd',
    name: 'David',
  },
});
