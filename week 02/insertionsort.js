// function insertionSort(arr){
//   let n = arr.length;
//   for(let i = 1 ; i<n; i++){
//     let temp = arr[i];
//     let j = i-1;

//     while(j>0 && arr[j]>temp){
//       arr[j+1]=arr[j];
//       j--;
//     }
//     arr[j+1] = temp;
//   }
//   return arr;
// }

// const arr = [1,4,3,2,55,45,3,22,77];
// console.log(insertionSort(arr));


// function insertionSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let temp = arr[i];
//     let j = i - 1;
//     while (j > 0 && arr[j] > temp) {
//       arr[j + 1] = arr[j];
//       j--
//     }
//     arr[j + 1] = temp;
//   }

//   return arr
// }
// const arr = [1, 4, 3, 2, 55, 45, 3, 22, 77];
// console.log(insertionSort(arr));


//------------------------------------------------

//Sort an array of floating-point numbers.


// function insertionSort(arr) {
//   let n = arr.length;

//   for (let i = 1; i < n; i++) {
//     let temp = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > temp) {
//       arr[j + 1] = arr[j];
//       j--
//     }
//     arr[j + 1] = temp;
//   }
//   return arr;
// }

// const arr = [3.14, 2.71, 1.618, 0.577, 4.669];
// let sorted = insertionSort(arr)
// console.log(sorted);


//-------------------------------------------
//Sort an array in descending order.

// function insertionSort(arr) {
//   let n = arr.length

//   for (let i = 1; i < n; i++) {
//     let temp = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] < temp) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = temp
//   }
//   return arr
// }


// const arr = [1, 4, 3, 2, 55, 45, 3, 22, 77];
// console.log(insertionSort(arr));


// function insertionSort(arr){
//   let n = arr.length;
//   for(let i = 0 ; i<n; i++){
//     let temp = arr[i];
//     let j = i-1;

//     while(j>=0 && arr[j]<temp){
//       arr[j+1] = arr[j];
//       j--;
//     }
//     arr[j+1]=temp
//   }
//   return arr;
// }

// const arr = [3,2,55,22,3,2,4,5,23,1,1231,66];
// console.log(insertionSort(arr));


//----------------------------------------------

//Insert an element into a sorted array.

// function insertionSort(arr,k){
//   arr.push(k);
//   console.log(arr);
//   let n = arr.length

//   for(let i = 1 ; i<n; i++){
//     let temp = arr[i];
//     let j = i-1;
//     while(j>=0 && arr[j]>temp){
//       arr[j+1] = arr[j];
//       j--
//     }
//     arr[j+1]=temp
//   }
//   return arr;
// }

// const arr = [77,3,2,11,0];
// const val = 9;
// console.log(insertionSort(arr,val));

//------------------------------------------

//





