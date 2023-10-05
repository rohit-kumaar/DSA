const arr = [1, 2, 3, 4, 5];

const forEachResult = arr.forEach((element) => {
  console.log(element * 2);
});
console.log(forEachResult);

const mapResult = arr.map((element) => element * 2);
console.log(mapResult);
