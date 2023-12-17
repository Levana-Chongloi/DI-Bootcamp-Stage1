// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

let family={
    father: "Jay",
    mother: "Dina",
    son: "Noam"
}

for ( let key in family){
   // console.log(key);
    console.log(key + ":"+ family[key])
}


