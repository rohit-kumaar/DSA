function removeStars(str) {
  const stack = [];

  for (const ch of str) {
    ch === "*" ? stack.pop() : stack.push(ch);
  }

  return stack.join("");
}

const str = "leet**cod*e";
const res = removeStars(str);
console.log(res);
