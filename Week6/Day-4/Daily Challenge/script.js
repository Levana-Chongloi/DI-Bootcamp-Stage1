let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// 1. Display fruits using forEach
const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};

displayGroceries();

// 2. Clone groceries
const cloneGroceries = () => {
  let user = client; // Copying the value of client to user
  client = "Betty"; // Changing the value of client to "Betty"
  console.log("Modified client:", client);
  console.log("User:", user);
  // The modification of client does not affect the value of user since user is a separate variable with its own value.

  let shopping = groceries; // Assigning the value of groceries to shopping
  shopping.totalPrice = "35$"; // Modifying the value of totalPrice in shopping
  console.log("Modified shopping totalPrice:", shopping.totalPrice);
  console.log("Groceries totalPrice:", groceries.totalPrice);
  // The modification of totalPrice in shopping affects the value in groceries since shopping is a reference to the same object.

  shopping.other.payed = false; // Modifying the value of payed in shopping
  console.log("Modified shopping payed:", shopping.other.payed);
  console.log("Groceries payed:", groceries.other.payed);
  // The modification of payed in shopping also affects the value in groceries since shopping is a reference to the same object.
};

cloneGroceries();
