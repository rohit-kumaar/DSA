function palindromeNumber(num) {
  let stringNumber = num.toString();
  let result = "";

  for (let i = stringNumber.length - 1; i >= 0; i--) {
    result = result + stringNumber[i];
    result = Number(result);
  }
  return result === num ;
}

const num = 121;
const result = palindromeNumber(num);
console.log(result);

console.log(~~54.3);
