/*================= STACK =================*/


class stack{
  constructor(){
    this.stack = []
  }

  push(element){
    this.stack.push(element)
  }

  pop(){
    if(this.isEmpty()){
      return "Stack is Empty. Can't perform pop"
    }
    return this.stack.pop();
  }
  peek() {
    if(this.isEmpty()){
      return "Stack is empty.Can't perform peek"
    }
  
    return this.stack[this.size() -1];

  }

  isEmpty(){
    return this.size() === 0;
  }
  size() {
    return this.stack.length;
  }

  printStack(){
    if(this.isEmpty()){
      console.log("Stack is empty.");
      return;
      
    }
    console.log("Stack contents:");
    for(let i = this.stack.length -1; i>=0 ; i--){
      console.log(this.stack[i]);
      
    }
    
      
    }
  
}


const Stack = new stack();

Stack.push(10)
Stack.push(20)
Stack.push(40)



console.log(Stack.peek());

console.log(Stack.isEmpty());

console.log(Stack.size());

Stack.printStack()


console.log("After pop");
console.log(Stack.pop());

Stack.printStack()







