// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// Examples
// 11 capitalize("I'm a little tea pot")> 'I'm A Little Tea Pot'
// capitalize('sHoRt AnD sTout')-> 'Short And Stout

let words = "I'm a little tea pot";

const capitalize = (str) => {
  const arrOfWords = str.split(" ");
  const arrOfWordsCased = [];

  for (let i = 0; i < arrOfWords.length; i++) {
    const word = arrOfWords[i];
    arrOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

  return arrOfWordsCased.join(" ");
};

console.log(capitalize(words));
