const user = {
  name: "Rohit Kumar",
  experience: {
    2016: "Auto Industry",
    2021: "IT Industry",
  },
};

const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.name = "Rohit Kumar Singh";
deepCopy.experience[2016] = "Auto Industry In Pune";

console.log("user :>> ", user);
console.log("deepCopy :>> ", deepCopy);
