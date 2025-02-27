let integer = -13;

const reverseInt = (int) => {
 const sign = Math.sign(int);

  int = Math.abs(int).toString();
  let result = "";
  for (let i = 0; i < int.length; i++) {
    result = int[i] + result;
  }

  return parseInt(result) * sign;
};

console.time();
console.log(reverseInt(integer));
console.timeEnd();
