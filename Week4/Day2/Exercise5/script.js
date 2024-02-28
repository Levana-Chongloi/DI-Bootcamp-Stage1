function changeEnough(itemPrice, amountOfChange) {
  // Define the values of each coin
  const quarterValue = 0.25;
  const dimeValue = 0.10;
  const nickelValue = 0.05;
  const pennyValue = 0.01;

  // Calculate the total value of the change
  const totalChange = amountOfChange[0] * quarterValue +
                      amountOfChange[1] * dimeValue +
                      amountOfChange[2] * nickelValue +
                      amountOfChange[3] * pennyValue;

  // Check if the total change is enough to afford the item
  return totalChange >= itemPrice;
}

// Examples
console.log(changeEnough(14.11, [2, 100, 0, 0])); // returns false
console.log(changeEnough(0.75, [0, 0, 20, 5]));   // returns true
