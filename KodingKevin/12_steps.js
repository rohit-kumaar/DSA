// Write a function that takes a number N.
// Over multiple lines it should console log a step shape
// with N levels using the # character. Be sure to notice
// how each step has some number of empty spaces to the right!
// Examples.
//     steps (2)
//    '# '
//    '##'
//     steps (3)
//    '#  '
//    '## '
//    '###'
//     steps (4)
//    '#   '
//    '##  '
//    '### '
//    '####'

const n = 4;

function steps(n) {
  let row = 1;
  let result = "";

  while (row <= n) {
    let col = 1;

    while (col <= row) {
      result += "#";
      col++;
    }

    result += "\n";
    row++;
  }
  return result;
}

console.log(steps(n));
