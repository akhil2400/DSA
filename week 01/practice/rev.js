class node{
  constructor(){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedlist{
  constructor(){
    this.head = null;
  }

  append(value){
    const newNode = new node(value);
    if(!this.head){
      this.head = newNode
      return
    }

    let current = this.head;
    while(current.next){
      current = current.next
    }
    
  }

  remove(value){
    if(value = this.head){
      this.head = this.head.next
      return
    }else if()
  }

 

}