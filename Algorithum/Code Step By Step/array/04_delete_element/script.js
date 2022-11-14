const array = [1, 2, 3, 4, 5];
console.log(array);

const button = document.querySelector("button");
button.addEventListener("click", function (e) {
  const index = document.querySelector("#index").value;
  const parseIndex = parseInt(index);
  for (let i = parseIndex; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  console.log(array);
});
