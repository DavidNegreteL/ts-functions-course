/**
 * * Single array
 */
const prices: (number | string)[] = [2, 5, 7, 9, 5, 's', 5, 's'];
/**
 * !Tuple: only accept two data types in a respective position
 */
let user: [string, number, boolean] = ['username', 12, false];
/**
 * !Destructuring a tuple
 */
const [username, age] = user;

console.log(`Username: ${username} | | Age: ${age}`);
