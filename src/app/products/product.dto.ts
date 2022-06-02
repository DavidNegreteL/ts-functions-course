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

/**
 * If you just need to update some data, I can do it with redundant code
 * interface updateProductDto {
    title?: string;
    image?: string;
    description?: string;
    stock?: number;
    size??: Sizes;
    color?: string;
    price?: number;
    category?: Category;
    isNew?: boolean;
    tags?: string[];
  };
 * * But it is not the best option
  */

/**
 * Solving with Partial
 */
export interface updateProductDto extends Partial<CreateProductDto> {}

/**
 * If you need all as required
 * type|interface requiredData = required<ProductInterface>
 */
