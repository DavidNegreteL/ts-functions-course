/**
 * Remove optional type ' ? ' and add ' = '
 */
export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 50
) => {
  return {
    /**
     ** The 'nullish-coalescing' operator isn't necessary because in line 6 and 7 specify default values
     */
    id,
    stock: stock,
    isNew: isNew,
  };
};

const p1 = createProduct(1, true, 78);
console.log(p1);

const p2 = createProduct(5);
console.log(p2);

const p3 = createProduct(99, false, 0);
console.log(p3);

/**
 * Console output
 * *{ id: 1, stock: 78, isNew: true }
 * !{ id: 5, stock: 50, isNew: true }
 * !{ id: 99, stock: 0, isNew: false }
 */
