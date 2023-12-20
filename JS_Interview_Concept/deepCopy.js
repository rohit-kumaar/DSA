const address = {
  city: "Rourkela",
  area: 51,
};

const person = {
  name: "Rohit Kumar",
  address: address,
};

const dCopyPerson = JSON.parse(JSON.stringify(person));
console.log(person);
console.log(dCopyPerson);
dCopyPerson.name = "Ricky";
console.log(person);
console.log(dCopyPerson);
dCopyPerson.address.city = "Sundergarh";
console.log(person);
console.log(dCopyPerson); // change city
