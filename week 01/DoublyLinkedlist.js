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

// class DNode{
//   constructor(data){
//     this.data = data;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedlist{
//   constructor(){
//     this.head = null;
//     this.tail = null;
//   }

//   append(value){
//         const newNode = new DNode(value);
//         if(!this.head){
//           this.head = newNode;
//           return;
//         }
        
//         let current = this.head;
//         while(current.next){
//           current = current.next;
//         }
        
//         current.next = newNode;
//         newNode.prev = current;
        
//       }

//   remove(value){
//     let current = this.head;
//     while(current){
//       if(current.data === value){
//         if(current === this.head){
//           this.head = current.next;
//           if(this.head)this.head.prev = null;
//         }else if(current === this.tail){
//           this.tail = current.prev;
//           this.tail.next = null;
//         }else{
//           current.prev.next = current.next;
//           current.next.prev = current.prev;
//         }
//         return;
//       }
//       current = current.next;
//     }
//   }


//   print(){
//     let current = this.head;
//     while(current){
//       console.log(current.data)
//       current = current.next
//     }
//   }
// }

// const dll = new DoublyLinkedlist();
// dll.append(1)
// dll.append(2)
// dll.append(3)
// dll.append(4)
// console.log("og");
// dll.print()

// console.log("modified");
// dll.remove(3)
// dll.print()


class DNode{
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedlist{
  constructor(){
    this.head = null;
    this.tail = null; 
  }

  append(data){
    const newNode = new DNode(data);
    if(!this.head){
      this.head = newNode;
      return
    }

    let current = this.head;
    while(current.next){
      current = current.next
    }

    current.next = newNode
    newNode.prev = current
  }

  reverse(){
    let current = this.head;
    let temp = null;

    while(current){
      temp = current.prev
      current.prev = current.next
      current.next = temp;
      current = current.prev;
    }if(temp){
      this.head = temp.prev;
    }
  }

  print(){
    let current = this.head;

    while(current){
      console.log(current.data);
      current = current.next; 
    }
  }
}
const dll = new DoublyLinkedlist();
dll.append(1)
dll.append(2)
dll.append(3)
dll.append(4)
dll.append(5)
console.log("old");
dll.print()
console.log("new");
dll.reverse()
dll.print()



