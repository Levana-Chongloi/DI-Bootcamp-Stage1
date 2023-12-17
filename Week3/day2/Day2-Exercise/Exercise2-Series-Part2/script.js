const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// 1. Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.

myWatchedSeries.pop();
myWatchedSeries.push("friends");


//2. Add, at the end of the array, the name of another series you watched.

myWatchedSeries.push("stranger things");


// 3. Add, at the beginning of the array, the name of your favorite series.

myWatchedSeries.unshift("dark");

// 4. Delete the series “black mirror”.

delete myWatchedSeries[1];

// 5. Console.log the third letter of the series “money heist”.

console.log(myWatchedSeries[2] [2]);

// 6. Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

console.log(myWatchedSeries);






