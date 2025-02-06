// /*=======Question==========*/

// // write a function to sort the given array nums in ascending order

// // Input:nums = [8,3,5,4,7,6,1,2] ====>outPut:[1,2,3,4,5,6,7,8]

// // function mergeSort(arr){
// //   //base case
// //   if(arr.length <= 1) return arr;

// //   let mid = Math.floor((arr.length)/2);

// //   let left = mergeSort(arr.slice(0,mid));
// //   let right = mergeSort(arr.slice(mid));

// //   return merge(left,right);
// // }

// // function merge(left,right){
// //   let sortedArr = [];
// //   while(left.length && right.length){
// //     if(left[0]<right[0]){
// //       sortedArr.push(left.shift());
// //   }else{
// //     sortedArr.push(right.shift());
// //   }
// //   }
// //   return[...sortedArr,...left,...right];

// // }


// // console.log(mergeSort([8,3,5,4,7,6,1,2]));



// /*=======Repeated=======*/

// // function mergeSort(arr){
// //   if(arr.length <=1) return arr

// //   let mid = Math.floor((arr.length)/2);

// //   let left = mergeSort(arr.slice(0,mid));
// //   let right = mergeSort(arr.slice(mid));

// //   return merge(left,right);
// // }

// // function merge(left,right){

// // let sorttedArr = [];

// // while(left.length && right.length){
// //   if(left[0]<right[0]){
// //     sorttedArr.push(left.shift());
// //   }else{
// //     sorttedArr.push(right.shift());
// //   }
// // }

// // return [...sorttedArr,...left,...right];

// // }


// // const arr = [10,22,3,54,7,5,2,3,1,9]
// // console.log(mergeSort(arr))


//Repeated:
//----------------------
// function mergeSort(arr){
//   if(arr.length <=1) return arr;

//   let mid = Math.floor((arr.length)/2)

//   let left = mergeSort(arr.slice(0,mid));
//   let right = mergeSort(arr.slice(mid));

//   return merge(left,right);
// }

// function merge(left,right){
//   let sorttedArr = [];
//   while(left.length && right.length){
//         if(left[0]<right[0]){
//           sorttedArr.push(left.shift());
//         }else{
//           sorttedArr.push(right.shift());
//         }
//   }

//   return [...sorttedArr,...left,...right];
// }

// const arr = [10,22,3,54,7,5,2,3,1,9]
// console.log(mergeSort(arr))




//Repeated:
//----------------------
// function mergeSort(arr){
//   if(arr.length <=1) return arr;

//   let mid = Math.floor((arr.length)/2);

//   let left = mergeSort(arr.slice(0,mid))
//   let right = mergeSort(arr.slice(mid))

//   return merge(left,right);
// }

// function merge(left,right){
//   let sortted = [];
//   while(left.length && right.length){
//     if(left[0]<right[0]){
//       sortted.push(left.shift())
//     }else{
//       sortted.push(right.shift())
//     }
//   }

//   return [...sortted,...left,...right]
// }

// const arr = [10,22,3,54,7,5,2,3,1,9]
// console.log(mergeSort(arr))


//Repeated:
//----------------------
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr

//   let mid = Math.floor((arr.length) / 2)

//   let left = mergeSort(arr.slice(0, mid))
//   let right = mergeSort(arr.slice(mid))

//   return merge(left, right)
// }

// function merge(left, right) {
//   let sortted = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       sortted.push(left.shift())
//     } else {
//       sortted.push(right.shift())
//     }
//   }

//   return [...sortted, ...left, ...right]

// }

// const arr = [1, 3, 2, -9, 10, 66, 89]
// console.log(mergeSort(arr));

