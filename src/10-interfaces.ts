/**
 * Interfaces can be extended unlike 'types' which cannot
 */
type Sizes = 'S' | 'M' | 'L' | 'XL';
// Apply types
type Product = {
  id: string;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};
//* Apply interface
//* ={} -> {}
interface ProductInterface {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: ProductInterface[] = [];

products.push({
  id: '5dsd-a',
  title: 'T-shirt',
  createdAt: new Date(),
  stock: 1256,
});

const addProduct = (data: ProductInterface) => {
  products.push(data);
};
