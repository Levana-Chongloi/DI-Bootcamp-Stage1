function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve(`${num} is less than 10`);
    } else {
      reject(`${num} is greater than or equal to 10`);
    }
  });
}

// Test case: Promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));
// Output: 15 is greater than or equal to 10

// Test case: Promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));
// Output: 8 is less than 10
