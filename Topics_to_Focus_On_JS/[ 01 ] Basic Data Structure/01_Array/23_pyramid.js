const pyramidHeight = 5;

function pyramid(pyramidHeight) {
  let row = "";

  for (let i = 1; i <= pyramidHeight; i++) {
    // Add spaces
    for (let j = 1; j <= pyramidHeight - i; j++) {
      row = row + " ";
    }

    // Add stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      row = row + "*";
    }

    row = row + "\n";
  }
  return row;
}

console.log(pyramid(pyramidHeight));
