// simple curring
const add1 = (a) => {
  return (b) => {
    return a + b;
  };
};

const result1 = add1(2)(3);
console.log(result1);

// Real time example
const data = {
  name: "Rohit",
  email: "rohit@gmail.com",
};

function user(data) {
  return function (userInfo) {
    return data[userInfo];
  };
}

const result2 = user(data)("email");
console.log(result2);

// Infinity curring
const add2 = (a) => {
  return (b) => {
    if (b) return add2(a + b);
    return a;
  };
};

const result = add2(5)(6)(4)();
console.log(result);
