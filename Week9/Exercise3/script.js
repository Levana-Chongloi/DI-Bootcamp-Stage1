const promise1 = Promise.resolve(3);

promise1.then((value) => {
  console.log(value); // Output: 3
});


const promise2 = Promise.reject("Boo!");

promise2.catch((error) => {
  console.log(error); // Output: "Boo!"
});
