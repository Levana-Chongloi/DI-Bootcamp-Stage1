const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort() //we sort the array first since we cannot sort a string


// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters

for (newName in names){
newName = (names[0][0]+names[1][0]+names[2][0]+ names[3][0] + names[4][0] + names[5][0])

}


// Console.log the name of their secret society. The output should be “ABJKPS”

console.log(newName);





