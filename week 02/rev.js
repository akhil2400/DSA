// class hashTable{
//   constructor(size=10){
//     this.table = new Array(size).fill(undefined)
//   }

//   _hash(key){
//     let hash = 0;
//     for(let i =0 ; i<key.length ; i++){
//       hash+=key.charCodeAt(i)
//     }
//     return hash % this.table.length
//   }

//   set(key,value){
//     let index = this._hash(key);

//     if(!this.table[index]) this.table[index] = []

//     this.table[index].push([key,value]);
//   }

  
// }


function Qucicksort(arr){
  let n = arr.length
  if(n<=1) return arr;
  let pivot = arr[0],left = [],right= [];

  for(let i = 1 ; i<n ; i++){
    arr[i]<pivot?left.push(arr[i]):right.push(arr[i])
  }

  return [...QuickSort(left),pivot,...QuickSort(right)]
}

let arr = [1,6,33,77,2]
