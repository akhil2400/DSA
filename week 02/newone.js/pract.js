/*Simple HashTable
-------------------*/

// class HashTable {
//   constructor(size = 10) {
//     this.table = new Array(size).fill(undefined)
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash += key.charCodeAt(i);
//     }
//     return hash % this.table.length;
//   }
//   set(key, value) {
//     let index = this._hash(key);
//     this.table[index] = [key, value];
//   }

//   get(key) {
//     let index = this._hash(key);
//     if (this.table[index] !== undefined && this.table[index][0] === key) return this.table[index][1]
//     return undefined;
//   }

//   remove(key) {
//     let index = this._hash(key);
//     if (this.table[index] !== undefined && this.table[index][0] === key) this.table[index] = undefined;
//   }
//   display() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) console.log(i, this.table[i])
//     }
//   }

// }

// let hash = new HashTable(10)
// hash.set("name", "Akhil")
// hash.set("age", 21)
// hash.display()
// console.log(hash.get("name"))
// console.log(hash.get("age"))
// hash.remove("name")
// console.log(hash.get("name"))



/*hashTable after openHashing
------------------------------*/

// class HashTable{
//   constructor(size =10){
//       this.table = new Array(size).fill(null).map(()=>[]);
//   }
//   _hash(key){
//       let hash = 0 ;
//       for(let i= 0 ; i<key.length ; i++){
//           hash += key.charCodeAt(i);
//       }
//       return hash % this.table.length;
//   }
  
//   set(key,value){
//       let index = this._hash(key);
//       for(let pair of this.table[index]){
//           if(pair[0] === key) return pair[1]=value
//       }
      
//       this.table[index].push([key,value]);
//   }
  
//   get(key){
//       let index = this._hash(key);
//       for(let pair of this.table[index]){
//           if(pair[0]===key) return pair[1];
//       }
//       return undefined
//   }
  
  
//   remove(key) {
// let index = this._hash(key);
// let bucket = this.table[index];

// for (let i = 0; i < bucket.length; i++) {
//   if (bucket[i][0] === key) {
//     bucket.splice(i, 1,"Deleted"); 
//     return;
//   }
// }
// }

//   display(){
//       for(let i = 0 ; i<this.table.length ; i++){
//           if(this.table[i]) console.log(i,this.table[i])
//       }
//   }
// }

// let hash = new HashTable();
// hash.set("akhil", "shamil");
// hash.set("likha", "shamil");
// hash.set("khila", "shamil");
// hash.set("hkila", "shamil");
// hash.set("fhaljk", "hemdan"); 
// console.log(hash.get("fhaljk"))
// hash.remove("fhaljk")
// hash.remove("hkila")
// hash.display()

