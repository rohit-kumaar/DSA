let str = "Madam";

function palindrome(str) {
  str = str.toLowerCase();

  let result = "";

  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }

  return str === result ? true : false;
}

console.time();
console.log(palindrome(str));
console.timeEnd();
