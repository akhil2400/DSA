class HashTable {
  constructor(size = 10) {
    this.table = new Array(size).fill(undefined)
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % this.table.length;
  }

  set(key, value) {
    let index = this._hash(key);
    
    while (this.table[index] !== undefined && this.table[index] !== "DELETED" && this.table[index][0] !== key) {
      index = (index + 1) % this.table.length;
      
    }
    if (this.table[index] && this.table[index][0] === key) {
      this.table[index][1] = value;
      return;
    } else {
      this.table[index] = [key, value]
    }

  }

  get(key) {
    let index = this._hash(key)
    ;
    while (this.table[index] !== undefined) {
      if (this.table[index] !== "DELETED" && this.table[index][0] === key) {
        return this.table[index][1]
      }

      index = (index + 1) % this.table.length;
      

    }

    return undefined
  }

  remove(key) {
    let index = this._hash(key);
    while (this.table[index] !== undefined) {
      if (this.table[index] !== "DELETED" && this.table[index][0] === key) {
        this.table[index] = "DELETED"
        return
      }
      index = (index + 1) % this.table.length;
      
    }
  }
  

}

let hash = new HashTable()
hash.set("akhil","shamil")
hash.set("likha","shamil")
hash.set("khila","shamil")
hash.set("hkila","shamil")
hash.remove("likha")

console.log(hash.table);
// hash.set("likha","hemdan")
console.log(hash.table);



