function isAnagram(string1, string2) {
  if (string1.length !== string2.length)
    return "Both string length is not equal";

  let counter = {};

  for (const element of string1) {
    counter[element] = (counter[element] || 0) + 1;
  }

  for (const element of string2) {
    if (!counter[element]) return "String2 not present";
    counter[element] -= 1;
  }
  return "Given string is anagram";
}
const result = isAnagram("rohit", "orhit");
console.log(result);
