const result = new Map();

console.log(result.set("a", "Apple"));

console.log(result.get("a"));

console.log(result.size);

console.log(result.set("b", "Ball"));

// console.log(result.delete("a"));

console.log(result);

console.log(result.has("a"));

result.forEach((element, index) => console.log(element));
