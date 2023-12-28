"use strict";

const person = {
  name: "Rohit Kumar",
  location: "Pune",
};

function checkName(a, b) {
  console.log(a, b);
  return this.name;
}

const fs = checkName.bind(person, [1, 2]);
console.log(fs());
