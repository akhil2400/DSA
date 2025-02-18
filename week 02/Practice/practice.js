// // class HashTable {
// //   constructor(size = 50) {
// //     this.table = new Array(size);
// //     this.size = size;
// //   }

// //   _hash(key) {
// //     let hash = 0;
// //     for (let i = 0; i < key.length; i++) {
// //       hash += key.charCodeAt(i);
// //     }

// //     return hash % this.size;
// //   }


// //   set(key, value) {
// //     const index = this._hash(key);

// //     if (!this.table[index]) {
// //       this.table[index] = [];
// //     }

// //     for (let i = 0; i < this.table[index].length; i++) {
// //       if (this.table[index][i][0] === key) {
// //         this.table[index][i][1] = value;
// //         return
// //       }
// //     }

// //     this.table[index].push([key, value])

// //   }


// //   get(key) {
// //     const index = this._hash(key)

// //     if (this.table[index]) {
// //       for (let pair of this.table[index]) {
// //         if (pair[0] === key) {
// //           return pair[1]
// //         }
// //       }
// //     }

// //     return undefined;
// //   }


// //   remove(key){
// //     const index = this._hash(key);

// //     if(this.table[index]){
// //       this.table[index] = this.table[index].filter(pair => pair[0] !== key)
// //     }

// //   }

// //   display(){
// //     for (let i = 0; i < this.size; i++) {
// //       if(this.table[i]){
// //         console.log(i,this.table[i])
// //       }

// //     }
// //   }

// // }


// // const myHashTable = new HashTable(10);

// // myHashTable.set("name :", "Akhil")
// // myHashTable.set("age :", 21)
// // myHashTable.remove("name :")

// // console.log(myHashTable.get("name :"));

// // myHashTable.display();



// // class HashTable {
// //   constructor(size = 10) {
// //     this.table = new Array(size).fill(undefined)
// //   }
// //   _hash(key) {
// //     let hash = 0;
// //     for (let i = 0; i < key.length; i++) {
// //       hash += key.charCodeAt(i)
// //     }
// //     return hash % this.table.length;
// //   }

// //   set(key, value) {
// //     let index = this._hash(key);

// //     while (this.table[index] !== undefined && this.table[index] !== "DELETE" && this.table[index][0] !== key) {
// //       index = (index + 1) % this.table.length;

// //     }
// //     if (this.table[index] && this.table[index][0] === key) {
// //       this.table[index][1] = value;
// //       return
// //     } else {
// //       this.table[index] = [key, value];
// //     }
// //   }

// //   get(key) {
// //     let index = this._hash(key);
// //     while (this.table[index] !== undefined) {
// //       if (this.table[index] !== "DELETED" && this.table[index][0] === key) {
// //         return this.table[index][1];
// //       }
// //       index = (index + 1) % this.table.length;
// //     }

// //     return undefined
// //   }

// //   remove(key) {
// //     let index = this._hash(key)
// //     while (this.table[index] !== undefined) {
// //       if (this.table[index] !== "DELETED" && this.table[index][0] === key) {
// //         this.table[index] = "DELETED"
// //         return
// //       }
// //       index = (index + 1) % this.table.length;
// //     }
// //   }
// // }

// // let hash = new HashTable()
// // hash.set("Akhil", "shamil")
// // hash.set("likhA", "shamil")
// // hash.set("liAhk", "shamil")
// // hash.set("lAkhi", "shamil")

// // console.log(hash.table);


// class HashTable {
//   constructor(size = 10) {
//     this.table = new Array(size);
//   }

//   _hash(key) {
//     let hash = 0 ; 
//     for(let i = 0 ; i<key.length ; i++){
//       hash += key.charCodeAt(i);
//     }
//     return hash % this.table.length;
//   }

//   set(key,value) {
//     const index = this._hash(key);
//     if(!this.table[index]) this.table[index] = [];
//     for(let pair of this.table[index]) {
//       if(pair[0] === key){
//         pair[1] = value;
//         return;
//       }
//     }
//     this.table[index].push([key,value]);
//   }

//   get(key){
//     const index = this._hash(key);
//     if(this.table[index]) {
//       for(let pair of this.table[index]){
//         if(pair[0] === key) return pair[1];
//       }
//     }

//     return undefined;
//   }

//   remove(key) {
//     const index = this._hash(key);
//     if(this.table[index]) {
//       let newset = [];
//       for(let pair of this.table[index]) {
//         if(pair[0] !== key) newset.push(pair);
//       }
//       this.table[index] = newset.length ? newset : undefined;
//     }
//   }

//   display() {
//     for(let i = 0 ; i<this.table.length ; i++){
//       if (this.table[i]) console.log(i,this.table[i]);
//     }
//   }
// }
// const myHashTable = new HashTable(10);
// myHashTable.set("name", "Akhil");
// myHashTable.set("age", 21);
// myHashTable.remove("name");

// console.log(myHashTable.get("name")); 
// myHashTable.display();


function QuickSort(arr,low = 0 , high = arr.length-1){
  if(low<high){
      let loc = partition(arr,low,high)
      QuickSort(arr,low,loc-1)
      QuickSort(arr,loc+1,high)
  }
  return arr
  }
  
  function partition(arr,low,high){
      let pivot = arr[low];
      let start = low;
      let end = high;
      
      while(start<end){
          while(start<high && arr[start]<=pivot) start++
          while(end>low && arr[end]>pivot) end++;
          
          if(start < end){
              [arr[start],arr[end]] = [arr[end],arr[start]];
          }
      }
      [arr[low],arr[end]]=[arr[end],arr[low]];
      
      return end;
  }
  
  let arr = [33,0,9,8,40,94,,44,2,1,-1]
  console.log(QuickSort(arr))