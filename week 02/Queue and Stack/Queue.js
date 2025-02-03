class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "underFlow,cannot perform dequeue";
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.size() === 0
  }

  front() {
    if (this.isEmpty()) {
      return "No Elements in the Queue";
    }
    return this.queue[0];
  }
  size() {
    return this.queue.length;
  }

  printQueue() {
    let QueueString = "";
    for (let i = 0; i < this.size(); i++) {
      QueueString += this.queue[i] + ", ";
    }
    console.log("Queue: " + QueueString);

  }
}


const myQueue = new Queue();
myQueue.enqueue(5)
myQueue.enqueue(96)
myQueue.enqueue(785)
myQueue.enqueue(200)


myQueue.dequeue()
myQueue.printQueue()
console.log(myQueue.front())
console.log(myQueue.size())