const iterable = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        return index < this.data.length
          ? { value: this.data[index++], done: false }
          : { done: true };
      },
    };
  },
};

for (let i of iterable) {
  console.log(i);
}
