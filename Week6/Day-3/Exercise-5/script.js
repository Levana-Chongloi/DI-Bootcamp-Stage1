// You will use nested functions, to open a new juice bar.

// Part I:


// function addIngredients(first, second, third){
//   console.log ("the ingredients are:", first, second, third);
// }

// function makeJuice(size){
//   console.log ("We are making a drink of this size:", size)
//   addIngredients("rum", "whiskey", "coke");
// }
// makeJuice("big");



// Part II

// function makeJuice(size){
//   const ingredients = [];
//   addIngredients("rum", "whiskey", "coke");
//   addIngredients("water", "sprite", "lime");

//   console.log ("ingredients:", ingredients);  
//   displaySentence(ingredients)

//   function addIngredients(first, second, third){
//     ingredients.push(first, second, third);
//   }

//   function displaySentence(ingredients){
//     const firstPart = `The client wants a ${size} drink containing `;
//     let secondPart = "";
//     const isLastElement = (array, index) => index === array.lenght -1;
//     ingredients.forEach((ingredient, i) => {
//     console.log("isLastElement(ingredients, i):", isLastElement (ingredients, i));
//     const word = `${ingredient}${isLastElement(ingredients, i) ? "." : ", "}`;
 
//     secondPart += word;
//   });
//     const sentence = firstPart + secondPart;
//     console.log ("sentence:", sentence);
//   }

// }
// makeJuice("big");

const isLastElement = (array, index) => index === array.length -1;

function makeJuice(size){
  let sentence = `The client wants a ${size} drink containing`;
  const ingredients = [];
  addIngredients("rum", "whiskey", "coke");
  addIngredients("water", "sprite", "lime");
  addIngredients("orange juice", "vodka", "chaser");

  console.log ("ingredients:", ingredients);  
  displaySentence(ingredients)

  function addIngredients(first, second, third){
    ingredients.push(first, second, third);
  }

  function displaySentence(ingredients){
  
    ingredients.forEach((ingredient, i) => {
    const commaOrFullStop = isLastElement(ingredients, i) ? "." : ", ";
    const word = `${ingredient}${commaOrFullStop}`;
    sentence +=word;
  });
    const p = document.createElement("p");
    p.innerText = sentence;
    p.classList.add("h1", "text-primary");
  }

}
makeJuice("big");


