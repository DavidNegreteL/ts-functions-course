/**
 * A modifying array
 * const numbers: number[] = [1,2,3,4,5,6,7,8];
 */

/**
 * Unmodifing array
 */
const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6, 7, 8];
/* Modify method */
numbers.push();
/* Unmodifing method */
numbers.filter(() => {});
numbers.map(() => {});
numbers.reduce(() => 0);
