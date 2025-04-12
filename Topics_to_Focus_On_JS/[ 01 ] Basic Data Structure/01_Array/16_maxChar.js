function maxChar(str) {
  const memo = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    memo[char] = memo[char] + 1 || 1;

    if (memo[char] > maxCount) {
      maxChar = char;
      maxCount = memo[char];
    }
  }

  return maxChar;
}

console.log('maxChar("apple") :>> ', maxChar("apple"));
