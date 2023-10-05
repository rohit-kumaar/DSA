import { users } from "./data.js";

// users.forEach((user) => {
//   console.log(user.hobbies && user.hobbies.hobby2);
// });

users.forEach((user) => {
  console.log(user?.hobbies?.hobby1);
});
