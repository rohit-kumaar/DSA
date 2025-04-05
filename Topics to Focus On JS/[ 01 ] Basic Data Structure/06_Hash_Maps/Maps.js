const map = new Map();

map.set("name", "Rohit Kumar");
map.set(10, "Its a birth date");
map.set(true, "Nick name is Ricky");
map.set({ DOB: 10071992 }, "Date of birth");
map.set([7, 1, 2, 8], "Bike Number");
map.set("undefined", undefined);

console.log(map);

console.log(map.get("name"));
console.log(map.get(10));
console.log(map.get(true));

map.forEach((item, index, arr) => {
  if (index.DOB === 10071992) {
    console.log(item);
  }
});

map.delete("undefined");
console.log(map.has("undefined"));

console.log(map.size);

console.log([...map.keys()]);
console.log([...map.values()]);
console.log([...map.entries()]);

map.clear();
console.log(map);
