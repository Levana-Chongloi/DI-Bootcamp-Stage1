//Using a DOM property, retrieve the h1 and console.log it.
var h1Element = document.querySelector('article h1');

// Log the text content of the h1 element to the console
console.log(h1Element.textContent);

// Add an event listener to the h2 element
document.querySelector('article h2').addEventListener('click', function() {
      
// Toggle the 'clicked' class to change the background color
this.classList.toggle('clicked');
 });

// Add an event listener to the h3 element
document.querySelector('article h3').addEventListener('click', function() {

// Toggle the 'hidden' class to hide/show the h3 element
this.classList.toggle('hidden');
  });

// JavaScript function to be called when the button is clicked
function boldText() {
// Select all paragraphs and toggle the 'bold-text' class
var paragraphs = document.querySelectorAll('article p');
paragraphs.forEach(function(paragraph) {
paragraph.classList.toggle('bold-text');
});
  }