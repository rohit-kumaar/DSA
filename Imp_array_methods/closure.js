function createUser(username) {
  const greeting = "Hi";

  function greet() {
    return `${greeting} ${username} is created`;
  }

  return greet;
}

const welcomeRohit = createUser("Rohit");
console.log(welcomeRohit());

const welcomeRicky = createUser("Ricky");
console.log(welcomeRicky());
