function bubblesort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
}

const arr = [ 0,  1,  5,  6, 12, 22, 33, 44];
console.log(bubblesort(arr))

// function bubblesort(arr) {
//   let n = arr.length
//   for (let i = 0; i < n-1; i++) {
//     let count = 0
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//         count++
//       }
//     }
//     if (count === 0) {
//       console.log("its from here");
//       break
//     }
//   }
//   return arr
// }

// console.log(bubblesort([0, 33, 43, 55, 1, 2, 23]))


// function bubblesort(arr) {
//   let n = arr.length;
//   for(let i = 0 ; i< n-1;i++){
//     for(let j = 0 ; j< n-1;j++){
//       if(arr[j]>arr[j+1]){
//         [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//       }
//     }
//   }
//   return arr;
// }

// const arr = [0, 33, 43, 55, 1, 2, 23];
// console.log(bubblesort(arr));



// --------------------------------------------------

// Find the largest and smallest element in an array.

// function bubblesort(arr){
//   let n = arr.length;
//   for(let i=0;i<n-1;i++){
//     for(let j = 0;j<n-1;j++){
//       if(arr[j]>arr[j+1]){
//         [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//       }
//     }
//   }
//   let largest= arr[n-1]
//   let smallest = arr[0]
//   return {largest,smallest}
// }

// const arr = [0, 33, 43, 55, 1, 2, 23];
// const result = bubblesort(arr);
// console.log("smallest :",result.smallest);
// console.log("largest :",result.largest);

//-----------------------------------------------
// Sort an array of strings alphabetically.

// function bubblesort(arr){
//   let asciValue = arr.map(char => char.charCodeAt(0));
//   let n = asciValue.length
  
//   for(let i = 0; i<n-1; i++ ){
//     for(let j = 0; j<n-1 ; j++){
//       if(asciValue[j]>asciValue[j+1]){
//         [asciValue[j],asciValue[j+1]]=[asciValue[j+1],asciValue[j]]
//       }
//     }
//   }
//   return asciValue.map(num=>String.fromCharCode(num)) 
// }

// let arr = ["h","i","f","g","d","e","b","a","c"]
// console.log(bubblesort(arr))




