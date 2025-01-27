// /*================Quick Sort=====================*/

// function quicksort(arr){
//   if(arr.length <= 1){
//     return arr
//   }

//   let pivot = arr[0];
//   let left =[];
//   let right = [];

//   for(let i = 1; i<arr.length ; i++){
//     if(arr[i]<pivot){
//       left.push(arr[i]);
//     }else{
//       right.push(arr[i]);
//     }
//   }

//   return [...quicksort(left),pivot,...quicksort(right)];
// }

// const arr = [1,22,42,53,23,656,2,0];
// console.log(quicksort(arr));


// function quicksort(arr){
//   let n = arr.length
//   if(n<=1){
//     return arr;
//   }

//   let left = [],right = [],pivot=arr[0];

//   for(let i = 1; i<n; i++){
//   arr[i]<pivot?left.push(arr[i]):right.push(arr[i]);   
//   }
//   return [...quicksort(left),pivot,...quicksort(right)];
// }

// const arr = [1,22,42,53,23,656,2,0];
// console.log(quicksort(arr));
