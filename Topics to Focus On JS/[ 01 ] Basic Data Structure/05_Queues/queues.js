class Queues {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(data) {
    if (this.isEmpty()) " Queues is empty";
    this.items.push(data);
  }

  dequeue() {
    this.items.shift();
  }

  front() {
    return this.isEmpty() ? "Queues is empty" : this.items[0];
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items;
  }
}

const queues = new Queues();
queues.enqueue(10);
queues.enqueue(20);
queues.enqueue(30);
console.log(queues.print());

queues.dequeue();
console.log(queues.print());

console.log(queues.front());

console.log(queues.size());
