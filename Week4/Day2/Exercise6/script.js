// Function to get the hotel cost
function hotelCost() {
  let numberOfNights;
  do {
    let input = prompt("Enter the number of nights you would like to stay in the hotel:");
    numberOfNights = parseInt(input);
  } while (isNaN(numberOfNights));

  const hotelCostPerNight = 140;
  return numberOfNights * hotelCostPerNight;
}

// Function to get the plane ride cost
function planeRideCost() {
  let destination;
  do {
    destination = prompt("Enter your destination (e.g., London, Paris):");
  } while (!destination || typeof destination !== 'string');

  switch (destisnation.toLowerCase()) {
    case 'london':
      return 183;
    case 'paris':
      return 220;
    default:
      return 300;
  }
}

// Function to get the rental car cost
function rentalCarCost() {
  let numberOfDays;
  do {
    let input = prompt("Enter the number of days you would like to rent the car:");
    numberOfDays = parseInt(input);
  } while (isNaN(numberOfDays));

  const dailyCarCost = 40;
  let totalCarCost = numberOfDays * dailyCarCost;

  // Apply a 5% discount for rentals longer than 10 days
  if (numberOfDays > 10) {
    totalCarCost *= 0.95;
  }

  return totalCarCost;
}

// Function to get the total vacation cost
function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();

  const totalCost = hotel + plane + car;
  
  console.log(`The hotel cost: $${hotel}, the plane tickets cost: $${plane}, the car rental cost: $${car}.`);
  console.log(`Total vacation cost: $${totalCost}`);
  return totalCost;
}

// Call the function to calculate and display the total vacation cost
totalVacationCost();
