// 1. Create a promise that resolves itself in 4 seconds and returns a "success" string.
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

// 2. Shorter version using Promise.resolve() and console.log "success".
const shorterPromise = Promise.resolve("success");

// Logging the value of shorterPromise
shorterPromise.then((value) => {
  console.log(value);
});

// 3. Adding code to catch errors and console.log 'Ooops something went wrong'.
const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Oops something went wrong"));
  }, 4000);
});

errorPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("Ooops something went wrong");
  });
