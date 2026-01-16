const arr = ["a", "b", "c", "d", "e"];
const chunk = [];
const size = 2;

function chunkFn(arr, size) {
  for (let i = 0; i < arr.length; i = i + size) {
    chunk.push(arr.slice(i, i + size));
  }

  return chunk;
}

const res = chunkFn(arr, size);
console.log(res);
