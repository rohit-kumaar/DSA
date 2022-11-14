const isPowerOfTwo = (n) => {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

/*

0 -> 000
1 -> 001
2 -> 010
3 -> 011
4 -> 100
5 -> 101
6 -> 111

*/
