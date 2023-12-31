// Prompt user for input
const userInput = prompt("Enter several words separated by commas:");

// Split the input into an array of words
const wordsArray = userInput.split(',');

// Find the length of the longest word
const maxLength = Math.max(...wordsArray.map(word => word.trim().length));

// Print the words in a rectangular frame
console.log('*'.repeat(maxLength + 4)); // Top border

wordsArray.forEach(word => {
    const paddedWord = word.trim().padEnd(maxLength, ' ');
    console.log(`* ${paddedWord} *`);
});

console.log('*'.repeat(maxLength + 4)); // Bottom border
