import { companies } from "./data.js";

const personOne = {
  name: "Rohit Kumar",
  age: 29,
  address: {
    city: "Bhilai",
    state: "Chhattisgarh",
  },
};

const personTwo = {
  name: "Bibhu Prasad",
  age: 27,
  address: {
    city: "Rourkela",
    state: "Odisha",
  },
};

const {
  name,
  address: { city },
} = personTwo;
console.log(name);
console.log(city);

// comment  override personOne in to personTwo
const personThree = { ...personOne, ...personTwo };
console.log(personThree);

// comment function destructuring
function printUser({ name, age }) {
  console.log(`The name is ${name} and Age is ${age}`);
}

printUser(personOne);
