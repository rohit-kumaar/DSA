"use strict";

const person = {
  name: "Rohit Kumar",
  location: "Pune",
};

function checkName(a, b) {
  console.log(a, b);
  return this.name;
}

console.log(checkName.apply(person, [1, 2]));
