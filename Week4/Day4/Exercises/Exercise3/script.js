var navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

// 3. Add a new <li> to the <ul>
var ul = navBar.firstElementChild; // Get the <ul> element
var newLi = document.createElement('li'); // Create a new <li> element
var textNode = document.createTextNode('Logout'); // Create a text node
newLi.appendChild(textNode); // Append the text node to the <li> element
ul.appendChild(newLi); // Append the <li> element to the <ul>

// 4. Retrieve the first and last <li> elements
var firstLi = ul.firstElementChild;
var lastLi = ul.lastElementChild;

// Display the text of each link
console.log('First link: ' + firstLi.textContent);
console.log('Last link: ' + lastLi.textContent);
