// function reverseString(str) {
//   // return str.split("").reverse().join("");

//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result = result + str[i];
//   }
//   return result;
// }

/*
OR
*/

function reverseString(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}

console.time();
console.log(reverseString("Rohit"));
console.timeEnd();
