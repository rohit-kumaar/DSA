// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// "fizz" instead of the number and for the multiples
// of five print "buzz". For numbers which are multiples
// of both three and five print "fizzbuzz".
// Example
// fizzBuzz (5);
// 1
// 2
// fizz
// 4
// buzz

let number = 15;

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log("FizzBuss");
        break;
      case i % 5 === 0:
        console.log("Buzz");
        break;
      case i % 3 === 0:
        console.log("Fizz");
        break;

      default:
        console.log(i);
        break;
    }
  }
};

fizzBuzz(number);
