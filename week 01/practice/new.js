// 


// class Node {
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList{
//   constructor(){
//     this.head = null;
//   }


// append(value){
//   const newNode = new Node(value);
//     if(!this.head){
//       this.head = newNode
//       return;
//     }

//     let current = this.head;
//     while(current.next){
//       current = current.next
//     }

//     current.next = newNode;
//   }


//   reverse(){
//     let prev = null
//     let current = this.head;

//     while(current){
//       let next = current.next;
//       current.next = prev;
//       prev= current;
//       current = next;
//     }

//     this.head = prev;
//   }

// print(){
//   let current = this.head;
//   while(current){
//     console.log(current.value)
//     current = current.next;
//   }
// }
// }


// const list = new LinkedList();

// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)
// list.append(5)


// console.log("origunal List:");
// list.print();

// list.reverse();

// console.log("Reversed List");

// list.print()