const a = [1, 2, 3];
const b = [2, 3, 4];

//m1
const c = [];
for (const item of a) {
  if (b.includes(item)) {
    c.push(item);
  }
}
console.log(c);

//m2
const d = a.filter((x) => b.includes(x));
console.log(d);
