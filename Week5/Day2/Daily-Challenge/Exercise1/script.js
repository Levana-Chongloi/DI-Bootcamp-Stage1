document.getElementById("libform").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get input values
  var noun = document.getElementById("noun").value;
  var adjective = document.getElementById("adjective").value;
  var person = document.getElementById("person").value;
  var verb = document.getElementById("verb").value;
  var place = document.getElementById("place").value;

  // Check if any input is empty
  if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
      alert("Please fill in all the blanks!");
      return;
  }

  // Create a story using the input values
  var story = person + " went to the " + place + " and saw a " + adjective + " " + noun + ". " + person + " then decided to " + verb + ".";
  
  // Display the story
  document.getElementById("story").innerText = story;
});