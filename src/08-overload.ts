/**
 * If a function receive 'David' string  => [D,a,v,i,d]
 * If a function receive [D,a,v,i,d] => 'David' string
 * *Overload only apply with function (not arrow)
 */

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // Is a string
  } else {
    return input.split(''); // Is an array
  }
}

const rtaArray = parseStr('David');
// To use as an 'array', we must do the following validation
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Receive David =>', rtaArray);

const rtaStr = parseStr(['D', 'a', 'v', 'i', 'd']);
console.log('rtaStr', "receive ['D', 'a', 'v', 'i', 'd'] => ", rtaStr);

/**
 * TS does not know if the response will be a 'string' or an 'array', therefore it cannot suggest methods of the data type
 * To use type methods need type validation with IF statement
 */
