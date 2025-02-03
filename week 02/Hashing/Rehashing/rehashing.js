class HashTable{
  constructor(intialCapacity = 4){
      this.capacity = intialCapacity
      this.size = 0;
      this.table = new Array(this.table);
  }
  hash(key){
      let hash = 0;
      for(let i = 0 ; i<key.length; i++){
          hash += key.charCodeAt(i);
      }
      
      return hash % this.capacity;
  }
  
  set(key,value){
      if(this.loadFactor()>0.7){
          this.rehash();
      }
      let index = this.hash(key);
      
      if(!this.table[index]){
          this.table[index] = [];
      }
      
      this.table[index].push([key,value]);
      this.size++;
      
  }
  
  get(key){
      let index = this.hash(key);
      
      if(!this.table[index]) return undefined
      
      for(let pair of this.table[index]){
          if(pair[0] === key) return pair[1];
      }
      return undefined;
  }
  
  loadFactor(){
      return this.size / this.capacity;
  }
  
  rehash(){
      console.log("Rehashing.....");
      let oldTable = this.table;
      this.capacity *= 2;
      this.size = 0;
      this.table = new Array(this.capacity);
      
      for(let bucket of oldTable){
          if(bucket){
              for(let [key,value] of bucket){
                  this.set(key,value)
              }
          }
      }
  }
  
}

let hash = new HashTable();

hash.set('One', 1);
hash.set('Two', 2);
hash.set('Three', 3);
hash.set('Four', 4);

console.log(hash.get("One"))
console.log(hash.get("Three"))