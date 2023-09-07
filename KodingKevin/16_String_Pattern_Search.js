// Given a text and a pattern, write a function that shows
// how many times the pattern occurs in the text.
// stringPattern Search ("lollipop", "lol") --> 1
// stringPatternSearch ("lolol", "lol") --> 2

function stringPatternSearch(text, pattern) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      let patternChar = pattern[j];

      if (patternChar !== text[i + j]) {
        break;
      }

      if (j === pattern.length - 1) {
        count++;
      }
    }
  }

  return count;
}

const text = "lollipop";
const pattern = "lol";
const result = stringPatternSearch(text, pattern);

console.log(
  `The text is ${text} and the pattern ${pattern} is match ${result} pattern`
);
