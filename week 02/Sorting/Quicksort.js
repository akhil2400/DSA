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



// Desending order
//----------------
// function quicksortD(arr){
//   if(arr.length <=1){
//     return arr;
//   }
//    let pivot = arr[0];
//    let left = [],right= [];
//   for(let i = 1; i<arr.length ; i++){
//   arr[i]>pivot?left.push(arr[i]):right.push(arr[i])
//   }

//   return [...quicksortD(left),pivot,...quicksortD(right)];
// }

// const arr = [1,22,42,53,23,656,2,0];
// console.log(quicksortD(arr));



/*-----------------------------------------------------------*/

/*use Quicksort to find the kth smallest element in an array*/

//input = [7,20,4,3,20,15],k = 5
//output = 7(3rd smallest element)

// function kthSmallest(arr,k){
//   if(arr.length <=1){
//     return arr;
//     }

//     let pivot = arr[0],left =[],right=[];

//     for(let i = 1 ; i<arr.length ; i++){
//       arr[i]<pivot?left.push(arr[i]):right.push(arr[i]);
//     }

//     return [...kthSmallest(left),pivot,...kthSmallest(right)]
// }

// function kth(sort,k){
//    const sorted = kthSmallest(sort);

//    return sorted[k-1]
// }

// const arr = [7,20,4,3,15];
// let k = 3;
// console.log( kth(arr,k))


/*==================OR=====================*/

// function findKthSmallest(arr, low, high, k) {
//   if (low <= high) {
//     let pivot = arr[low];
//     let i = low + 1;
//     let j = high;

//     while (i <= j) {
//       while (i <= high && arr[i] <= pivot) i++;
//       while (j >= low && arr[j] > pivot) j--;
//       if (i < j) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }

//     [arr[low], arr[j]] = [arr[j], arr[low]];

//     if (j === k - 1) {
//       return arr[j];
//     } else if (j > k - 1) {
//       return findKthSmallest(arr, low, j - 1, k);
//     } else {
//       return findKthSmallest(arr, j + 1, high, k);
//     }
//   }
//   return -1;
// }

// const arr1 = [7, 10, 4, 3, 20, 15];
// const K = 3;
// console.log(`The ${K}th Smallest is :` , findKthSmallest(arr1, 0, arr1.length - 1, K));

//------------------------------------------------------------------------------------------

//Partition an array around a pivot element.

// function partition(arr, low, high) {
//   const pivot = arr[high]; // Choose the last element as the pivot
//   let i = low - 1; // Index of the smaller element

//   for (let j = low; j < high; j++) {
//       // If the current element is <= pivot, move it to the left partition
//       if (arr[j] <= pivot) {
//           i++;
//           [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
//       }
//   }

//   // Place the pivot in its correct position
//   [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//   return i + 1; // Return the pivot index
// }


// const arr = [3, 6, 8, 10, 1, 2, 1];
// const pivotIndex = partition(arr, 0, arr.length - 1);
// console.log("Partitioned array:", arr);
// console.log("Pivot index:", pivotIndex);



// function Quicksort(arr) {
//   let n = arr.length;
//   if (arr.length <= 0) return arr;
  

//   let pivot = arr[0], left = [], right = [];

//   for (let i = 1; i < n; i++) {
//     arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
//   }

//   return [...Quicksort(left), pivot, ...Quicksort(right)]
// }

// function kth(arr, k) {
//   let sortted = Quicksort(arr);
//   console.log(sortted)
//   if (k <= 0) return "no such element in this index"
//   else if(k = 1) return sortted[0]
//   return sortted[k - 1]
// }

// let arr = [1, 4, 2, 7, 5, 8, 0];
// let k = 1

// console.log(kth(arr, k));


function QuickSort (arr,low=0,high=arr.length-1){
  if(low < high){
      let loc = partition(arr,low,high)
      QuickSort(arr,low,loc-1);
      QuickSort(arr,loc+1,high);
  }
  return arr;
}

function partition(arr,low,high){
  let pivot = arr[low],start = low,end = high;
  
  while(start < end){
      while(start<=high && arr[start]<=pivot) start++;
      while(end>low && arr[end]>pivot) end--;
      
      if(start<end){
          [arr[start],arr[end]] = [arr[end],arr[start]];
      }
  }
  [arr[low],arr[end]]=[arr[end],arr[low]];
  return end;
}

let arr=[22,3,3,0,88,88,67,5,88,3];
console.log(QuickSort(arr))









