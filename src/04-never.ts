/**
 * For without end functions like While(true)
 */
const withoutEnd = () => {
  while (true) {
    console.log('Nunca pares de aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'Es un array';
  }
  return fail('Falló');
};

console.log(example('Hola'));
console.log(example([1, 2, 3, 4, 5, 6]));
console.log(example(7687686));
console.log(example('Hola después del fail'));
