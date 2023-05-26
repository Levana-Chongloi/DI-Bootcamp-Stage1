const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1: Convert the users object into an array
const usersArray = Object.entries(users);

console.log(usersArray)

// Part 2: Multiply the user's ID by 2
 const modifiedArray = usersArray.map(([key, value]) => [key, value * 2]);

console.log(modifiedArray);
