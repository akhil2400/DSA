/*Linked list
=============*/


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;

  }
  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head;
    while (current.next) {
      current = current.next
    }

    current.next = newNode;

  }

  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("Ivalid index");
      return;
    }
    
    const newNode = new Node(data);
    if (index === 0) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;


    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;

  }

  removeTop() {

    if (!this.head) {
      return
    }

    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
  
    if (!this.head.next) {
      this.head = null;
      return;
    }
  
    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
  
    current.next = null;
  }
  
  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid index");
    }

    if (index === 0) {
      this.head = this.head.next;
      return
    }

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }

  }
  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}


function arrayToLinkedlist(arr){
  const linkedList = new LinkedList();
  arr.forEach(element =>{
      linkedList.addLast(element);
  });
  return linkedList
}

const linkedList = new LinkedList();
linkedList.addFirst(1);
// linkedList.addFirst(2);
// linkedList.addFirst(3);
// linkedList.addFirst(4);
linkedList.addLast(10); 
// linkedList.addAt(2,10);
// linkedList.removeTop();
// linkedList.removeLast();
// linkedList.removeAt(1);

let arr = [1,2,3,4,5,6]
let func = arrayToLinkedlist(arr)

func.print()


// linkedList.print()

// console.log("Size:" + linkedList.size())
