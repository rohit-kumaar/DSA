// Copy Only Level One;

const address = {
  city: "Rourkela",
  area: 51,
};

const person = {
  name: "Rohit Kumar",
  address: address,
};

const sCopyPerson = { ...person };
console.log(person);
console.log(sCopyPerson);
sCopyPerson.name = "Ricky";
console.log(person);
console.log(sCopyPerson);
sCopyPerson.address.city = "Sundergarh";
console.log(person); // change city
console.log(sCopyPerson); // change city
