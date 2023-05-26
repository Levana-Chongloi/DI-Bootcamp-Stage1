//first challenge

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    const uppercasedWords = words.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        reject('Error: All elements in the array must be strings.');
      }
    });
    resolve(uppercasedWords);
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      const sortedWords = words.sort();
      resolve(sortedWords);
    } else {
      reject('Error: The array length must be bigger than 4.');
    }
  });
}


makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error));
// Output: Error: All elements in the array must be strings.

makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error));
// Output: Error: The array length must be bigger than 4.

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)); //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch(error => console.log(error));



//Second Challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS).length === 0) {
        throw new Error('Morse JavaScript object is empty.');
      }
      resolve(morseJS);
    } catch (error) {
      reject(error);
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt('Enter a word or sentence:');
    if (userInput === null) {
      reject(new Error('No input provided.'));
      return;
    }
    const morseTranslation = [];
    for (let i = 0; i < userInput.length; i++) {
      const character = userInput[i].toLowerCase();
      if (morseJS.hasOwnProperty(character)) {
        morseTranslation.push(morseJS[character]);
      } else {
        reject(new Error(`Invalid character: ${userInput[i]}`));
        return;
      }
    }
    resolve(morseTranslation);
  });
}

function joinWords(morseTranslation) {
  const morseString = morseTranslation.join(' ');
  document.getElementById('morse-output').innerText = morseString;
}

toJs()
  .then(toMorse)
  .then(joinWords)
  .catch(error => {
    console.error(error);
    alert('An error occurred. Please check the console for details.');
  });
