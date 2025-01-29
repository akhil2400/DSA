//Write a recursive function to check if a given string is a palindrome




// function search(nums, target){
//   let start = 0;
//   let end = nums.length-1;

//   while(start<=end){
//     let mid = Math.floor((start+end)/2)

//     if(nums[mid]===target){
//     return mid
//     }  

//     else if(nums[mid]<target){
//       start = mid+1;
//     }else{
//       end =mid-1;
//     }
//   }
//   return -1
// }

// let arr = [1,2,3,4,5]

// console.log(search(arr,3))


// function reverseString(str) {
//   if (str.length <= 1) {
//       return str;
//   }
//   return reverseString(str.slice(1)) + str[0];
// }

// const originalString = "hello";
// const reversedString = reverseString(originalString);
// console.log("Original String:", originalString);
// console.log("Reversed String:", reversedString);

function reverseArray(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, arr.length - 1)));
}
const array = [1, 2, 3, 4, 5];
const reversed = reverseArray(array);
console.log(reversed); 



// function febi(n){
//   if(n<=1)return n;
//   return febi(n-1) + febi(n-2); 
// }

// console.log(febi(5));
