// comment case - I
// ================================================
const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

// const a = alphabet[0];
// const b = alphabet[1];
const [a, , c, ...rest] = alphabet;
console.log(a);
// comment b is skip
// console.log(b);
console.log(c);
// comment rest operator
console.log(`%crest`, `color:red`, rest);
// comment spread operator
// console.log(alphabet.concat(numbers));
console.log(`%cspread operator`, `color:red`, [...alphabet, ...numbers]);

// comment case - II
// ================================================
// comment function return an array
function sumAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}
console.log(`%csumAndMultiply`, `color:red`, sumAndMultiply(2, 3));

const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);
console.log(`%cSum`, `color:red`, sum);
console.log(`%cMultiply`, `color:red`, multiply);
console.log(`%cDivision`, `color:red`, division);
