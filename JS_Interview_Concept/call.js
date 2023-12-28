"use strict";

const person = {
  name: "Rohit Kumar",
  location: "Pune",
};

function checkName(a, b) {
  console.log(a, b);
  return this.name;
}

console.log(checkName.call(person, 1, 2));
