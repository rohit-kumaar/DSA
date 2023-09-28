class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  unShift(data) {
    const newHead = new Node(data, this.head);
    this.length++;
    this.head = newHead;
  }
}

let linkList = new LinkList(35);
console.log(linkList.unShift());
