function foo(outer_arg) {
  function inner(inner_arg) {
    return outer_arg + inner_arg;
  }
  return inner;
}
let result = foo(5);

console.log(result(4));
console.log(result(3));
