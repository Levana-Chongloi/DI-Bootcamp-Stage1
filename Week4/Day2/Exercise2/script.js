function calculateTip() {
  // Prompt user for the amount of the bill
  const billAmount = parseFloat(prompt("Enter the amount of the bill:"));

  // Check the bill amount and calculate the tip accordingly
  let tipPercentage;
  if (billAmount < 50) {
    tipPercentage = 0.2; // 20%
  } else if (billAmount >= 50 && billAmount <= 200) {
    tipPercentage = 0.15; // 15%
  } else {
    tipPercentage = 0.1; // 10%
  }

  // Calculate tip and final bill
  const tipAmount = billAmount * tipPercentage;
  const finalBill = billAmount + tipAmount;

  // Log the tip amount and the final bill to the console
  console.log(`Tip amount: $${tipAmount.toFixed(2)}`);
  console.log(`Final bill: $${finalBill.toFixed(2)}`);
}

// Call the calculateTip() function
calculateTip();

  