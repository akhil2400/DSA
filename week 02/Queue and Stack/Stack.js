// // /*================= STACK =================*/


// class stack{
//   constructor(){
//     this.stack = []
//   }

//   push(element){
//     this.stack.push(element)
//   }

//   pop(){
//     if(this.isEmpty()){
//       return "Stack is Empty. Can't perform pop"
//     }
//     return this.stack.pop();
//   }
//   peek() {
//     if(this.isEmpty()){
//       return "Stack is empty.Can't perform peek"
//     }

//     return this.stack[this.size() -1];

//   }

//   isEmpty(){
//     return this.size() === 0;
//   }
//   size() {
//     return this.stack.length;
//   }

//   printStack(){
//     if(this.isEmpty()){
//       console.log("Stack is empty.");
//       return;

//     }
//     console.log("Stack contents:");
//     for(let i = this.stack.length -1; i>=0 ; i--){
//       console.log(this.stack[i]);

//     }


//     }

// }


// const Stack = new stack();

// Stack.push(10)
// Stack.push(20)
// Stack.push(40)



// console.log(Stack.peek());

// console.log(Stack.isEmpty());

// console.log(Stack.size());

// Stack.printStack()


// console.log("After pop");
// console.log(Stack.pop());

// Stack.printStack()




// //creating ll using stack;

// //using an Array-Based stack;

// // class stack{
// //   constructor(){
// //     this.stack = [];
// //   }

// //   push(value){
// //     this.stack.push(value);
// //   }

// //   pop(){
// //     return this.stack.pop();
// //   }

// //   peek(){
// //     return this.stack[this.stack.length-1];
// //   }

// //   isEmpty(){
// //     return this.stack.length === 0;
// //   }

// //   size(){
// //     return this.stack.length
// //   }
// // }

// // class ListNode{
// //   constructor(value){
// //     this.value = value;
// //     this.next = null
// //   }
// // }

// // class LinkedList{
// //   constructor(){
// //     this.stack = new stack();
// //     this.head = null;
// //   }


// //   push(value){
// //     let newNode = new ListNode(value)
// //     if(this.head){
// //       newNode.next = this.head;
// //     }
// //     this.head = newNode;
// //     this.stack.push(newNode);
// //   }

// //   pop(){
// //     if(this.head){
// //       this.stack.pop();
// //       this.head = this.head.next;
// //     }
// //   }

// //   print(){
// //     let current = this.head;
// //     let result = "";
// //     while(current){
// //       result += current.value + "->";
// //       current = current.next;
// //     }
// //     console.log(result+"null");
// //   }
// // }


// // const ll = new LinkedList();
// // ll.push(10);
// // ll.push(20);
// // ll.push(30);
// // ll.print()


// // class Node {
// //   constructor(value) {
// //     this.value = value;
// //     this.next = null;
// //   }
// // }

// // class Stack {
// //   constructor() {
// //     this.top = null;
// //   }
// //   push(value) {
// //     let newNode = new Node(value)
// //     newNode.next = this.top;
// //     this.top = newNode;
// //   }
// //   pop() {
// //     if (!this.top) return null;
// //     let poppedNode = this.top;
// //     this.top = this.top.next;
// //     return poppedNode.value;
// //   }
// //   peek() {
// //     return this.top ? this.top.value : null;
// //   }
// //   isEmpty() {
// //     return this.top = null;
// //   }
// //   print() {
// //     let current = this.top;
// //     let result = "";
// //     while (current) {
// //       result += current.value + "->";
// //       current = current.next;
// //     }
// //     console.log(result + "null");
// //   }
// // }
// // const stack = new Stack();
// // stack.push(10);
// // stack.push(20);
// // stack.push(30);
// // stack.push(40);
// // stack.print();

// // stack.pop();
// // stack.print();


// // REVERSE A STRING USING STACK

// // class Stack {
// //   constructor() {
// //     this.stack = []
// //   }

// //   push(char) {
// //     this.stack.push(char)
// //   }
// //   pop() {
// //     return this.stack.pop()
// //   }
// //   isEmpty() {
// //     return this.stack.length === 0
// //   }
// // }

// // function reverse(str) {
// //   let stack = new Stack()
// //   for (let char of str) {
// //     stack.push(char)
// //   }
// //   let rev = ""
// //   while (!stack.isEmpty()) {
// //     rev += stack.pop()
// //   }
// //   return rev
// // }
// // let str = "shamil"
// // console.log(reverse(str))


// //QUEUE USING STACK

// class Stack {
//   constructor() {
//     this.s1 = []
//     this.s2 = []
//   }
//   enqueue(x) {
//     this.s1.push(x)
//   }
//   dequeue() {
//     if (this.s1.length === 0) {
//       return
//     }
//     while (this.s1.length > 1) {
//       this.s2.push(this.s1.pop())
      
//     }
//     let dequeued = this.s1.pop()

//     while (this.s2.length) {
//       this.s1.push(this.s2.pop())
//     }
//     return dequeued
//   }


// }

// let stack = new Stack();

// stack.enqueue(10);
// stack.enqueue(40)
// stack.enqueue(30)
// stack.enqueue(20)
// stack.enqueue(50)

// console.log(stack.s1);
// console.log(stack.s2);

// console.log(stack.dequeue());






