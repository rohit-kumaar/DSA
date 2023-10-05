function first() {
  console.log("This is first function");
}

function second() {
  console.log("This is second function");
}

/* Calling the first function after 2 seconds. */
setTimeout(first, 2000); // setTimeout is a callback function
second();
