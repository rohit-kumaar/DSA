/* ------------------- */
/* START : Statement   */
/* ------------------- */
//   Generator function is a special type of function, by using generator function we can pause or execute the execution.
//   In general function when we call the function is automatically execute all the function, also the generator function
//   give a output of an object, in the output gives a values and done keys.
/* ------------------- */
/* END   : Statement   */
/* ------------------- */

function* generatorFs() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFs();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
