function count(n) {
  if (n < 0) return 0;
  return (n * (n + 1)) / 2;
}

const res = count(10);
console.log(res);
