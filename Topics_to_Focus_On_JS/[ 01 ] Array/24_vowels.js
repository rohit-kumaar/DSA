const str = "Rohit Kumar";

function vowels(str) {
  str = str.toLowerCase();

  const vowels = "Aeiou".toLowerCase().split("");
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    for (let j = 0; j < vowels.length; j++) {
      let vowel = vowels[j];

      if (char === vowel) {
        count++;
      }
    }
  }

  return count;
}

console.log(vowels(str));
