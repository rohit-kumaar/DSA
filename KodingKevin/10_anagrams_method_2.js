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

  stringAShorted = stringA.split("").sort().join("");
  stringBShorted = stringB.split("").sort().join("");

  return stringAShorted === stringBShorted;
};

console.log(anagrams(stringA, stringB));
