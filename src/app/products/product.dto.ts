import { ProductInterface } from './product.model';
/**
 * Omit and Pick type
 * These data types allow us to create new interfaces based on others,
 * but omitting or selecting only certain values.
 */
export interface CreateProductDto
  extends Omit<
    ProductInterface,
    'id' | 'createdAt' | 'updatedAt' | 'category'
  > {
  categoryId: string;
}
