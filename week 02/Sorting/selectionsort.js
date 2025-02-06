// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let minIdx = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIdx]) {
//                 minIdx = j
//             }
//         }
//         let temp = arr[minIdx]
//         arr[minIdx] = arr[i]
//         arr[i] = temp
//     }
//     return arr
// }


// console.log(selectionSort([29, -10, 0, 14, -3, 37, 12]))


// function selectionSort(arr){
//     for(let i = 0; i< arr.length -1 ; i++){
//         let minIndex = i
//         for(let j = i+1 ; j<arr.length; j++){
//             if(arr[j] <arr[minIndex]){
//                 minIndex = j;
//             }
//         }
//         [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]]
//     }
//     return arr
// }

// console.log(selectionSort([29, -10, 0, 14, -3, 37, 12]))


// function selectionSort(arr){
//     let n = arr.length;
//     for(let i = 0;i<n-1; i++){
//         let minIdx = i;
//         for (let j = i+1; j < n; j++){
//             if(arr[j]<arr[minIdx]){

//                 minIdx = j;
//             }
//         }
//         [arr[minIdx],arr[i]]=[arr[i],arr[minIdx]];
//     }
//     return arr
// }
// console.log(selectionSort([29, -10,  14, -3, 37, 12,0]))

// function selectionSort(arr){
//   let n = arr.length;
//   for(let i = 0 ; i<n-1;i++){
//     let minIdx = i;
//     for(let j = i+1 ; j<n ; j++){
//       if(arr[j]<arr[minIdx]){
//         minIdx=j;
//       }
//     }
//     [arr[minIdx],arr[i]]=[arr[i],arr[minIdx]];
//   }

//   return arr;
// }

// let arr= [6,-5,8,9,10,33,55,0]
// console.log(selectionSort(arr))

// function selectionSort(arr){
//   let n = arr.length
//   for(let i = 0 ; i<n-1 ; i++){
//     let minIdx = i;
//     for(let j = i+1 ; j<n ; j++){
//       if(arr[j]<arr[minIdx]){
//         minIdx = j;
//       }
//     }
//     [arr[minIdx],arr[i]]=[arr[i],arr[minIdx]];
//   }
//   return arr
// }

// let arr = [1,-10,19,5,4,99,0]
// console.log(selectionSort(arr));
