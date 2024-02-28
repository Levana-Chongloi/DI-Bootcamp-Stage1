//Part-1

function infoAboutMe() {
    // Replace the placeholder values with your own information
    const name = "Levana";
    const age = 32; 
    const hobbies = ["reading", "hiking", "travelling"]; 
  
    // Construct a sentence about yourself
    const sentence = `Hello! My name is ${name}. I'm ${age} years old, and I enjoy ${hobbies.join(', ')}.`;
  
    // Log the sentence to the console
    console.log(sentence);
  }
  
  // Call the function
  infoAboutMe();


//Part-2

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  const sentence = `Your name is ${personName}, you are ${personAge} years old, and your favorite color is ${personFavoriteColor}.`;
  console.log(sentence);
}

// Call the function with the first set of arguments
infoAboutPerson("David", 45, "blue");

// Call the function with the second set of arguments
infoAboutPerson("Josh", 12, "yellow");

  