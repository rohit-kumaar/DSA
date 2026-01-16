const str = "madam";

function isPalindrome(str) {
  let isPalindrome = true;

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      isPalindrome = false;
      break;
    }

    left++;
    right--;
  }

  return isPalindrome;
}

const res = isPalindrome(str);
console.log(res);
