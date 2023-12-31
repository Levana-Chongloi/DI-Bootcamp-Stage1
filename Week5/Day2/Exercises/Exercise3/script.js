// Declare a global variable named allBoldItems.
var allBoldItems;

// Create a function called getBoldItems() that collects all the bold items.
function getBoldItems() {
  allBoldItems = document.querySelectorAll('#paragraph strong');
}

// Create a function called highlight() that changes the color of bold text to blue.
function highlight() {
  for (var i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = 'blue';
  }
}

// Create a function called returnItemsToDefault() that changes the color of bold text back to black.
function returnItemsToDefault() {
  for (var i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = 'black';
  }
}

// Call getBoldItems() to initialize the allBoldItems variable.
getBoldItems();

// Call the function highlight() on mouseover and returnItemsToDefault() on mouseout.
var paragraph = document.getElementById('paragraph');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);
