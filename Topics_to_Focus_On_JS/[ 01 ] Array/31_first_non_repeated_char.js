const str = "aabbcddffe";

function firstNonRepeatedChar(str) {
  for (const item of str) {
    let firstIndex = str.indexOf(item);
    let lastIndex = str.lastIndexOf(item);

    if (firstIndex === lastIndex) {
      return item;
    }
  }

  return null;
}

const res = firstNonRepeatedChar(str);
console.log(res);
