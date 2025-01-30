class HashTable {
  constructor(size = 50) {
    this.table = new Array(size);
    this.size = size;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.size;
  }


  set(key, value) {
    const index = this._hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return
      }
    }

    this.table[index].push([key, value])

  }


  get(key) {
    const index = this._hash(key)

    if (this.table[index]) {
      for (let pair of this.table[index]) {
        if (pair[0] === key) {
          return pair[1]
        }
      }
    }

    return undefined;
  }


  remove(key){
    const index = this._hash(key);

    if(this.table[index]){
      this.table[index] = this.table[index].filter(pair => pair[0] !== key)
    }

  }

  display(){
    for (let i = 0; i < this.size; i++) {
      if(this.table[i]){
        console.log(i,this.table[i])
      }
      
    }
  }

}


const myHashTable = new HashTable(10);

myHashTable.set("name :", "Akhil")
myHashTable.set("age :", 21)

console.log(myHashTable.get("name :"));


console.log("HASH TABLE");
myHashTable.display();
