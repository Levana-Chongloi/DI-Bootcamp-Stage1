// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output

const isString = (arg) => (typeof arg === "string" ? true: false);

console.log('isString("Hello"):', isString("hello"));
console.log('isString(123):', isString (123));