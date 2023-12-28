let person = {
  name: "Rohit",
  sayHi: function () {
    return "Hi, " + this.name;
  },
};
console.log(person.sayHi());

// =================== Using This In Function =================
function sayHi() {
  return "Hi, " + this.name;
}

let obj1 = {
  name: "Ricky",
};

let obj2 = {
  name: "Micky",
};

obj1.say = sayHi;
obj2.say = sayHi;

console.log(obj1.say());
console.log(obj2.say());

// =================== Using This In Function =================
