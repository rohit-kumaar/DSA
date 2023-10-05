let car = {
  red: function () {
    return "Audi";
  },
};

let apple = {
  color: "red",
};

apple.__proto__ = car;


console.log(apple.color);
console.log(apple.red());
