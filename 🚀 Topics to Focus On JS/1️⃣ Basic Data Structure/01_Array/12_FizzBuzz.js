function fizzBuzz(n) {
  const arr = new Array(n);

  for (let i = 1; i <= n; i++) {
    let result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    arr[i - 1] = result || String(i);
  }

  return arr;
}

const res = fizzBuzz(15);
console.log(res);
