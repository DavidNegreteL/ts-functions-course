/**
 * Overloading
 * Typing
 * When input -> string return array
 * When input -> array return string
 */
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // Is a string
  } else {
    return input.split(''); // Is an array
  }
}

const rtaArray = parseStr('David');
// We can use this as an Array without problem
//rtaArray.reverse();
console.log('rtaArray', 'Receive David =>', rtaArray);

const rtaStr = parseStr(['D', 'a', 'v', 'i', 'd']);
console.log('rtaStr', "receive ['D', 'a', 'v', 'i', 'd'] => ", rtaStr);

/**
 * Can refactor like this for a generic applications
 * !export function parseStr(input: unknown): unknown {
 */
