function lengthOfLongestSubstring(s) {
  let left = 0;
  let longest = 0;
  let charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

const s = "abcabcbb";
const res = lengthOfLongestSubstring(s);
console.log(res);
