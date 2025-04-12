// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// Examples
// anagrams ('heart', 'earth')->True
// anagrams ('heart', earth')->True
// anagrams ('Heart!', 'EARTH')->True
// anagrams ('lol', 'lole')-> False

const stringA = "heart";
const stringB = "earth";

const anagrams = (stringA, stringB) => {
  //Sanitize Input strings
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  if (stringA.length !== stringB.length) {
    return false;
  }

  const stringACharCount = {};

  for (let i = 0; i < stringA.length; i++) {
    const aChar = stringA[i];
    stringACharCount[aChar] = stringACharCount[aChar] + 1 || 1;
  }

  for (let i = 0; i < stringB.length; i++) {
    const bChar = stringB[i];

    if (!stringACharCount[bChar]) {
      return false;
    } else {
      stringACharCount[bChar]--;
    }
  }

  return true;
};

console.log(anagrams(stringA, stringB));
