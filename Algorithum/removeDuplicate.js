const array = [5, 5, 2, 3, 2, 4, 6, 5, 6, 7, 8, 2, 1, 3, 4, 2, 3, 4, 5];
const notDuplicate = [];
let notDuplicateLength = notDuplicate.length;

function removeDuplicate(array) {
  for (let i = 0; i < array.length; i++) {
    let exist = false;

    for (let j = 0; j < notDuplicate.length; j++) {
      if (array[i] === notDuplicate[j]) {
        exist = true;
        break;
      }
    }

    if (!exist) {
      notDuplicate[notDuplicateLength] = array[i];
      notDuplicateLength++;
    }
  }

  return notDuplicate;
}

let result = removeDuplicate(array);
console.log(result);
