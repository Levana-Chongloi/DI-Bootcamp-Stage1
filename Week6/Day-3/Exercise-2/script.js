// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// 1. First, use function declaration and invoke it.

function convertKilogramsToGrams(num){
    return num * 1000;
}

const result = convertKilogramsToGrams(3);
console.log("result:", result);


// Then, use function expression and invoke it.

const convertKilogramsToGrams = function(num){
    return num * 1000;
};
const result = convertKilogramsToGrams(3);
console.log("result:", result);


/* Write in a one line comment, the difference between function declaration and function expression.

Answer: Function declarations are hoisted and can be accessed before they are declared, while function expressions are not hoisted and can only be accessed after they are assigned.

For example:
    
Function Declaration:
function add(num1, num2) {
    return num1 + num2;
  }
  
Function Expression:
  const subtract = function(num1, num2) {
    return num1 - num2;
  };

  */



// Finally, use a one line arrow function and invoke it.

const convertKilogramsToGrams = (num) => num*1000;
const result = convertKilogramsToGrams(3);
console.log("result:", result);