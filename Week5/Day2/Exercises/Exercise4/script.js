function calculateVolume() {
  // Get the radius input value
  var radius = document.getElementById("radius").value;

  // Check if the input is a valid number
  if (isNaN(radius)) {
      alert("Please enter a valid number for the radius.");
      return;
  }

  // Calculate the volume of the sphere
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the volume in the volume input field
  document.getElementById("volume").value = volume.toFixed(2);
}