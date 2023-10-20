import { companies } from "./data.js";

console.log(companies);
const find = companies.find((element) => element.category === "Auto");
console.log(find);


const users = [
    { id: 1, userName: "Rohit", password: "rohit123" },
    { id: 2, userName: "Bibhu", password: "bibhu123" },
    { id: 3, userName: "Lalit", password: "lalit123" },
  ];
  
  const inputUser = { userName: "Rohit", password: "rohit123" };
  
  // 1. User Authentication:
  const authenticatedUser = users.find((user) => user.userName === inputUser.userName && user.password === inputUser.password);
  
  if (authenticatedUser) {
    console.log("Login");
  } else {
    console.log("Error");
  }
