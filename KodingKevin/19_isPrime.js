const pmt = prompt("Enter a number (or cancel)");

if (pmt === null) {
  console.log("Cancelled");
} else {
  const num = Number(pmt);

  if (isNaN(num)) {
    console.log("Enter a number");
  } else {
    if (num > 0) {
      if (isPrime(num)) {
        console.log(`${num} is prime`);
      } else {
        console.log(`${num} is not prime`);
      }
    } else {
      console.log("Enter a number should greater the 0");
    }
  }
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i = i + 2) {
    if (n % i === 0) return false;
  }
  return true;
}
