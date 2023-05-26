function isAnagram(str1, str2) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Check if the lengths of the cleaned strings are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Sort the characters in the cleaned strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
