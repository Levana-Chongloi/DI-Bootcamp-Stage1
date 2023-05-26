//Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
//Use the reduce() method to combine all of these into a single string.


const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((accumulator, currentValue) => {
  return accumulator + ' ' + currentValue;
});

console.log(combinedString);


//Output: a long time ago in a galaxy far far away