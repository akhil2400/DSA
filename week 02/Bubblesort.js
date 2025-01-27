// function bubblesort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
//   return arr;
// }

// const arr = [ 0,  1,  5,  6, 12, 22, 33, 44];
// console.log(bubblesort(arr))

function bubblesort(arr) {
  let n = arr.length
  for (let i = 0; i < n-1; i++) {
    let count = 0
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        count++
      }
    }
    if (count === 0) {
      console.log("its from here");
      break
    }
  }
  return arr
}

console.log(bubblesort([0, 33, 43, 55, 1, 2, 23]))