// Given a phrase, substitute each character by shifting it up
// the alphabet by a given integer. If necessary, the shifting
// should wrap around back to the beginning of the alphabet.
// Make sure the function only shifts letters.
// Examples
// caeserCipher ("abcd", 1) === "bcde";
// caeserCipher ("yz", 1)=== "za";
// caeserCipher ("abcd", 100) === "wxyz";
// caeserCipher ("gurer ner 9 qbtf!", 13) === "there are 9. dogs!"

const alphabet = "abcd";
const shift = 1;

function caesarCipher(str, shift) {
  const alphabetArr = [...Array(26)].map((_, i) => {
    return String.fromCharCode(65 + i).toLowerCase();
  });
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const idx = alphabetArr.indexOf(char);

    if (idx === -1) {
      result = result + char;
      continue;
    }

    const encodeCode = (idx + shift) % 26;
    result = result + alphabetArr[encodeCode];
  }

  return result;
}

console.log(caesarCipher(alphabet, shift));
