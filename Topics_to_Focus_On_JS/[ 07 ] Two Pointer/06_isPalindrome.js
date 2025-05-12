function isAlNum(str) {
  return /^[a-zA-Z0-9]$/.test(str);
}

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (!isAlNum(str[left])) {
      left++;
      continue;
    }

    if (!isAlNum(str[right])) {
      right--;
      continue;
    }

    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

const str = "A man, a plan, a canal: Panama";
const res = isPalindrome(str);
console.log(res);
