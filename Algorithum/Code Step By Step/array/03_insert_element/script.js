// let array = [10, 20, 30, 40, 50];
// const insertEl = 60;
// const position = 2;

// console.log(array);
// for (let i = array.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     array[i + 1] = array[i];
//     if (i === position) {
//       array[i] = insertEl;
//     }
//   }
// }
// console.log(array);

let array = [10, 20, 30, 40, 50];
console.log(array);

const button = document.querySelector("button");
button.addEventListener("click", function (e) {
  const position = document.querySelector("#position").value;
  let insertEl = document.querySelector("#insertEl").value;
  insertEl = parseInt(insertEl);
  for (let i = array.length - 1; i >= 0; i--) {
    if (i >= position) {
      array[i + 1] = array[i];
      if (i == position) {
        array[i] = insertEl;
      }
    }
  }
  console.log(array);
});
