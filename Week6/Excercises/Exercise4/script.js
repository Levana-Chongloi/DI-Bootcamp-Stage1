// 1. Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color,i) => console.log(`#${i+1} choice is ${color}`));

// 2 Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
const isVioletInArray = colors.some(color => color === "Violet");
console.log ("isVioletInArray:", isVioletInArray);