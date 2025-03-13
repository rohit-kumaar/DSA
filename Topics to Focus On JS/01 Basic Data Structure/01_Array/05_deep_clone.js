const obj = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "cycling"],
  details: {
    scores: [10, 20, 30],
    active: true,
  },
};

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }

  return copy;
}

const clonedObj = deepClone(obj);
console.log(clonedObj);

clonedObj.name = "Bob";
clonedObj.address.city = "Los Angeles";
clonedObj.hobbies.push("swimming");

console.log("Original Object:", obj);
console.log("Cloned Object:", clonedObj);
