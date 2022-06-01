/**
 * Optional parameters must be at the end of the scope of a declaration.
 */
export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    /*
     * Example of an old problem in JS with " || " operator
     */
    //id,
    //If stock es empty set default option: 10
    //stock: stock || 10,
    //isNew: isNew || true

    /**
     * Now, this operator " ?? " -> " nullish-coalescing " solve the problem
     */

    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

const p1 = createProduct(1, true, 78);
console.log(p1);

const p2 = createProduct(5);
console.log(p2);
// *! Problem, falsy value can be change result to True
const p3 = createProduct(99, false, 0);
console.log(p3);
