let integer = -13;

const reverseInt = (int) => {
  int = String(int);
  let result = "";

  for (let i = 0; i < int.length; i++) {
    result = int[i] + result;
    result = parseInt(result);
  }

  if (int < 0) {
    return result * -1;
  }

  return result;
};

console.time();
console.log(reverseInt(integer));
console.timeEnd();
