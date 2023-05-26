
/* 1. 

In JavaScript, the strict equality operator (===) compares whether two values are equal in both value and type.

[2] === [2] //false
//The first statement [2] === [2] compares two arrays [2] and [2]. Arrays are reference types in JavaScript, and even if they have the same content, they will be considered different objects in memory. Therefore, the comparison will evaluate to false.

{} === {} //false, this compares two empty objects {}. Similarly to arrays, objects are also reference types, and two empty object literals will be considered separate objects in memory. Thus, the comparison will also evaluate to false. */


/* 2. 
object1.number: 4
object2.number: 4
object3.number: 4
object4.number: 5

/*Explanation:

Initially, object1 is created with a property number having a value of 5.
Then, object2 is assigned the reference of object1, so both object1 and object2 point to the same object in memory.
Similarly, object3 is assigned the reference of object2, so now all three variables (object1, object2, and object3) refer to the same object.
object4 is created as a new object with its own property number having a value of 5. It is a separate object from the previous three.
After that, the statement object1.number = 4 modifies the number property of the shared object referred to by object1, object2, and object3. Therefore, when we access object2.number or object3.number, we get the updated value of 4.

However, object4.number remains unaffected because it is a separate object with its own number property, and it was never modified. Hence, it still retains the initial value of 5. */



//2. 1 - Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect … 

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}


//2.2 - Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.


class Mammal extends Animal {
  sound(animalSound) {
    return `The ${this.type} named ${this.name} is ${this.color} and makes a sound: ${animalSound}`;
  }
}


//2. 3 - Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
//For example: Moooo I'm a cow, named Lily and I'm brown and white


const farmerCow = new Mammal("Lily", "cow", "brown and white");
const cowSound = farmerCow.sound("Moooo");

console.log(cowSound); //Output: The cow named Lily is brown and white and makes a sound: Moooo








