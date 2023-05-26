//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); 

//Output will be: ["bread", "carrot", "potato", "chicken", "apple", "orange"] 


