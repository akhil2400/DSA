// class DoubleNode {
//   constructor(value){
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }

// }
// class DoublyLinkedlist{
//   constructor(){
//     this.head = null;
//   }

//   addFirst(value){
//     const newNode = new DoubleNode(value);
//     newNode.next = this.head
//     this.head = newNode
//     return
//   }
  
//   insertAtend(value){
//     const newNode = new DoubleNode(value);
//     if(!this.head){
//       this.head = newNode;
//       return;
//     }
    
//     let current = this.head;
//     while(current.next){
//       current = current.next;
//     }
    
//     current.next = newNode;
//     newNode.prev = current;
    
//   }

//   print(){
//     let current = this.head;
//     while(current){
//       console.log(current.value)
//       current = current.next;
//     }
// }
// }

// const dil = new DoublyLinkedlist()

// dil.insertAtend(10)
// dil.insertAtend(20)
// dil.insertAtend(30)
// dil.insertAtend(40)
// dil.addFirst(1)
// dil.addFirst(3)
// dil.print();

