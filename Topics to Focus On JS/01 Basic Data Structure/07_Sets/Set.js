const set = new Set();
set.add(10);
set.add(20);
set.add(30);
console.log(set);

console.log(set.has(10));

set.delete(20);

console.log(set);
console.log(set.size);

for (const ele of set) {
  console.log(ele);
}

set.forEach((element) => {
  console.log(element);
});
