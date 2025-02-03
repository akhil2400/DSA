// //✅ Step 1: Create the Hash Table Class

// class HashTable {
//   constructor(size = 50) {
//     this.table = new Array(size);
//     this.size = size;
//   }

//   /*🔹 We define a class HashTable.
//     🔹 The constructor initializes an array (table[]) with a fixed size (size).
//     🔹 The default size is 50, but it can be customized. */

// //------------------------------------------------------------    

// //✅ Step 2: Create a Hash Function    

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash += key.charCodeAt(i); //Convert characters to ASCII and sum them
//     }
//     return hash % this.size;// Get index with in the table size
//   }

//   /*
//   🔹 This function converts a string key into a numeric index.
//   🔹 It sums the ASCII values of all characters in the key.
//   🔹 The final index is calculated using modulus (%) to ensure it stays within array bounds.
//   */

// //------------------------------------------------------------------------------------------------

// // ✅ Step 3: Insert Data (Key-Value Pairs)

//   set(key, value) {
//     const index = this._hash(key);  // Get index using the hash function

//     if (!this.table[index]) {
//       this.table[index] = []; //Initialaize the index if empty
//     }


//     // Check if the key already exists, update its value
//     for (let i = 0; i < this.table[index].length; i++) {
//       if (this.table[index][i][0] === key) {
//         this.table[index][i][1] = value;
//         return;
//       }
//     }
//     this.table[index].push([key, value]); //store the key-value pair
//   }

//   /*
//   🔹 This method stores a key-value pair in the table.
//   🔹 It first computes the index using _hash(key).
//   🔹 If the index is empty, it initializes an empty array.
//   🔹 If the key already exists, it updates the value instead of creating a duplicate.
//   🔹 If the key is new, it pushes [key, value] into the array.

//   */

//   //-------------------------------------------------------------------------------------

//   //✅ Step 4: Retrieve a Value by Key

//   get(key) {
//     const index = this._hash(key); //Get index using the hash function

//     if (this.table[index]) {
//       for (let pair of this.table[index]) {
//         if (pair[0] === key) { // If key matches, return value
//           return pair[1];
//         }
//       }
//     }
//     return undefined; // key not found
//   }

//   /*
//   🔹 This method retrieves the value for a given key.
//   🔹 It computes the index and checks if the key exists at that index.
//   🔹 If the key is found, the function returns the value. Otherwise, it returns undefined.

//   */

// //-------------------------------------------------------------------------------------


//   //✅ Step 5: Remove a Key-Value Pair

//   remove(key) {
//     const index = this._hash(key);// Get index
//     if (this.table[index]) {
//       this.table[index] = this.table[index].filter(pair => pair[0] !== key);
//     }
//   }

//   /*
//   🔹 This method removes a key-value pair.
//   🔹 It filters out the matching key from the array at the computed index.
//   */

//   //-------------------------------------------------------------------------------------

//   /*✅ Step 6: Display the Hash Table*/

//   display() {
//     for(let i = 0; i < this.size; i++){
//       if(this.table[i]) {
//         console.log(i, this.table[i]);//print index and stores key-value pairs
//       }
//     }
//   }
//   /*
//     🔹 This function prints the entire hash table, showing non-empty indices and their contents.
//   */
// }

// const myHashTable = new HashTable(10); // Creat a hash table of size 10

// myHashTable.set("name :","Akhil");
// myHashTable.set("age :", 21);
// myHashTable.set("city :","Malappuram");

// console.log("Hash Table:");
// myHashTable.display();

// console.log("Name:",myHashTable.get("name :"));
// console.log("Age:", myHashTable.get("age :"));

// myHashTable.remove("age");
// console.log("After removing age :", myHashTable.get("age")); 

// console.log("Hash Table:");

// myHashTable.display();



/*==============================Questions========================== */
//Count the frequency of each element in an array.

// function freq(arr) {
//   let freqTable = {};
//   for (let nums of arr) {
//     if (freqTable[nums]) {
//       freqTable[nums]++
//     } else {
//       freqTable[nums] = 1;
//     }
//   }
//   return freqTable;
// }

// const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 9, 9, 0]
// console.log(freq(numbers))


//Check if two arrays have common elements.

// function check(arr1 , arr2){
//   let hasTable = new Set(arr1);
//   for(let num of arr2){
//     if(hasTable.has(num)){
//       return true;
//     }
//   }
//   return false;
// }
// console.log(check([1,2,3,4],[8,7,5,6,7]))

// function check(arr1 , arr2){
//   let hashTable = new Set(arr1)
//   for(let num of arr2){
//     if(hashTable.has(num))
//       return true;
//   }
//   return false
// }
// console.log(check([1,2,3,4],[8,7,5,6,7]))





