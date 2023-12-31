function isDivisible() {
  let sum = 0;

  for (let number = 0; number <= 500; number++) {
    if (number % 23 === 0) {
      console.log(number);
      sum += number;
    }
  }

  console.log(`Sum of numbers divisible by 23: ${sum}`);
}

// Call the function
isDivisible();



  