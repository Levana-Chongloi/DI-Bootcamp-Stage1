const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

colors.forEach((color,i) => {
    const incrementIndex = i+1;
    console.log(`${incrementIndex}${getOrdinal(incrementIndex)} choice is ${color}`);
});

function getOrdinal(i){
    if ([1,2,3].includes(i)) return ordinal[i];
    return ordinal[0];
}