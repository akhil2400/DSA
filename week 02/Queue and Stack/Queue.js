// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(element) {
//     this.queue.push(element);
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return "underFlow,cannot perform dequeue";
//     }
//     return this.queue.shift();
//   }

//   isEmpty() {
//     return this.size() === 0
//   }

//   front() {
//     if (this.isEmpty()) {
//       return "No Elements in the Queue";
//     }
//     return this.queue[0];
//   }
//   size() {
//     return this.queue.length;
//   }

//   printQueue() {
//     let QueueString = "";
//     for (let i = 0; i < this.size(); i++) {
//       QueueString += this.queue[i] + ", ";
//     }
//     console.log("Queue: " + QueueString);

//   }
// }


// const myQueue = new Queue();
// myQueue.enqueue(5)
// myQueue.enqueue(96)
// myQueue.enqueue(785)
// myQueue.enqueue(200)


// myQueue.dequeue()
// myQueue.printQueue()
// console.log(myQueue.front())
// console.log(myQueue.size())


//Stack using Queue

// class SUQ {
//   constructor(){
//       this.q1= [];
//       this.q2= [];
//   }
  
//   push(x) {
//       while(this.q1.length){
//           this.q2.push(this.q1.shift())
//       }

//       console.log("Adding..." + x)
//       this.q1.push(x);

//       while(this.q2.length){
//           this.q1.push(this.q2.shift());
//       }

//       console.log("Added.")
//   }

//   pop(){
//       console.log("Popping...")
//       if(this.q1.length === 0) return "Stack is Empty"
//       return "Popped Value is :" + this.q1.shift();

//   }

//   top(){
//       console.log("Searching for top...")
//   return this.q1.length > 0 ? "Top element is :" + this.q1[0]:"Stack is Empty"
//   }
//   isEmpty(){
//       console.log("checking the stack is empty or not")
//       return this.q1.length === 0;
//   }
// }
// let Stack = new SUQ();
// Stack.push(10);
// Stack.push(20);
// Stack.push(30);
// console.log("Contents in the stack")

// console.log(Stack.q1)
// console.log(Stack.pop())
// console.log(Stack.top())
// console.log(Stack.isEmpty())
// console.log(Stack.pop())
// console.log(Stack.pop())
// console.log(Stack.pop())


//Reversing a string using Queue

// class Queue {
//   constructor(){
//       this.val = [];
//   }
  
//   enqueue(elem) {
//       this.val.push(elem)
//   }
//   dequeue(){
//       if(this.isEmpty()) return "Queue is empty";
//       return this.val.shift();
//   }
  
//   isEmpty() {
//       return this.val.length ===0;
//   }
  
// }

// function reverse(str){
//   let queue = new Queue();
  
//   for(let char of str){
//       queue.enqueue(char);
//   }
  
//   let stack = [];
  
//   while(!queue.isEmpty()) {
//       stack.push(queue.dequeue());
//   }
  
//   let reversedStr = "";
  
//   while(stack.length) {
//       reversedStr += stack.pop();
//   }
  
//   return reversedStr;
// }

// let str = "Akhil"
// console.log(str)
// console.log(reverse(str));


// class Queue{
//   constructor(){
//     this.queue=[]
//   }

//   enqueue(elem){
//     this.queue.push(elem);
//   }

//   dequeue(){
//     if(this.isEmpty()) return "The Queue is Empty"
//     return this.queue.shift();
//   }

//   isEmpty(){
//     return this.queue.length === 0;
//   }

//   top(){
//     if(this.isEmpty()) return "The Queue is Empty"

//     return this.queue[0];
//   }

//   print(){
//     let Queue = "";
//     for(let i = 0 ; i<this.queue.length ; i++){
//       Queue += this.queue[i]+"->" 
//     }
//     console.log("Queue : " + Queue)
//   }
// }

// let myQueue = new Queue();

// myQueue.enqueue(10)
// myQueue.enqueue(20)
// myQueue.enqueue(40)
// myQueue.enqueue(70)

// console.log(myQueue.top())
// myQueue.print()

// myQueue.dequeue()

// myQueue.print()

// console.log(myQueue.top());


//second largest using Queue

// class Queue{
//   constructor(){
//     this.queue=[]
//   }

//   enqueue(elem){
//     this.queue.push(elem);
//   }

//   dequeue(){
//     if(this.isEmpty()) return "The Queue is Empty"
//     return this.queue.shift();
//   }

//   isEmpty(){
//     return this.queue.length === 0;
//   }

//   top(){
//     if(this.isEmpty()) return "The Queue is Empty"

//     return this.queue[0];
//   }

//   print(){
//     let Queue = "";
//     for(let i = 0 ; i<this.queue.length ; i++){
//       Queue += this.queue[i]+"->" 
//     }
//     console.log("Queue : " + Queue)
//   }
//   secondSmallest() {
//     if(this.queue.length < 2) return "No enough elements in the arr"

//     let smallest = Infinity;
//     let secondSmallest = Infinity;

//     for(let num of this.queue){
//       if(num < smallest){
//         secondSmallest = smallest;
//         smallest = num;
//       }else if(num > smallest && num < secondSmallest){
//         secondSmallest = num;
//       }
//     }
//     return (secondSmallest === Infinity)?"No secondSmallest in this":secondSmallest
    
//   }
// }

// let myQueue = new Queue();

// myQueue.enqueue(10)
// myQueue.enqueue(20)
// myQueue.enqueue(40)
// myQueue.enqueue(70)

// myQueue.print()


// console.log(myQueue.secondSmallest())


