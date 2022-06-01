/**
 *
 */

let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

// 1. Try unknowVar.toUpperCase();
// Make a type verification

if (typeof unknowVar === 'string') {
  // String typing active inside this type validation
  unknowVar.toUpperCase();
}

// Apply to a Variable
//let isNew: boolean = unknowVar;
// Need a type validation
if (typeof unknowVar === 'boolean') {
  let isNew: boolean = unknowVar;
}

// Use un functions

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
