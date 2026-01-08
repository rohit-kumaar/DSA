"use strict";

/*
call and apply invoke the function immediately with a chosen this — call takes individual args, apply takes an array.
bind returns a new function with this permanently bound, without invoking it.
*/

const person = {
  name: "Rohit Kumar",
  location: "Pune",
};

function checkName(a, b) {
  console.log(a, b);
  return this.name;
}

console.log(checkName.call(person, 1, 2));
