// // factorial
// // function factorial(num){
// //   if(num === 0){
// //   return 1
// //   }else{
// //     return num*factorial(num-1)
// //   }
// // }
// // console.log(
// //   factorial(5)
// // )

// //Create an array with range of numbers
// // input: start=1. end = 5 --------> output:

// function range (start,end){
//       if(end<start){
//         return []
//       }else{
//         const numbers = range(start,end-1);
//         numbers.push(end)
//         return numbers
//       }    
// }

// // so here
// // range(0,5) =>[0,1,2,3,4,5]
// // range(0,4) =>[0,1,2,3,4]
// // range(0,3) =>[0,1,2,3]
// // range(0,2) =>[0,1,2]
// // range(0,1) =>[0,1]
// // range(0,0) =>[0]
// // range(0,-1) =>[]
// console.log(
//   range(0,5)
// )


// 


// function febi(n){
//   if(n<=1)return n;
//   return febi(n-1) + febi(n-2); 
// }

// console.log(febi(5));


//sum of arr

// function sumofArr(arr, n){
//   if(n<=0)return 0;
//   return arr[n-1]+sumofArr(arr,n-1);
//   }

//   const arr = [1,2,3,4,5];
//   console.log(sumofArr(arr,arr.length));


// function sum (arr,n){
//   if(n<=0)return 0;
//   return arr[n-1]+sum(arr,n-1);
// }

// const arr = [1,2,3,4,5,6];
// console.log(sum(arr,arr.length));


// Third Largest Element in an Array

// function thirdLargest(arr){
//   const sorted = [...new Set(arr)].sort((a,b) => b-a);
//   return sorted.length >= 3?sorted[2]:null;
// }

// console.log(thirdLargest([10,4,3,50,23,90]));


// function thirdLargest(arr) {
//   const sorted = [...new Set(arr)].sort((a,b)=>b-a);
//   return sorted.length >= 3?sorted[2]:null;
// }

// console.log(thirdLargest([1,2,3,4,5,4,3,2,1]));

// removing an char from a string
// function removel(str){
//   if(str.length === 0){
//     return "";
//   }
//   if(str[0].toLowerCase() === 'o'){
//     return removel(str.slice(1))
//   }
//   return str[0] + removel(str.slice(1));
// }
// const text = "lock the local room of local police"
// const result = removel(text)
// console.log(result);

// function removel(str){
//   if(str.length === 0){
//   return "";
//   } if(str[0].toLowerCase() === "l"){
//   return removel(str.slice(1)) 
//   }
//   return str[0]+removel(str.slice(1))   
// }
//   const text = "Hello World"
//   const result = removel(text)
//   console.log(result)


//Reversing string
//================

// function reverseString(str) {
//   if (str.length === 0) return ""; 
//   console.log(str)
//   return str[str.length - 1] + reverseString(str.slice(0, -1));
// }

// const text = "hello world"
// const res = reverseString(text);
// console.log(res)


// function reverseString(str) {
//   if (str.length <= 1) {
//     return str;
//   }

//   console.log(str)
//   return reverseString(str.slice(1)) + str[0];

// }

// function reverseWordInString(sentences) {
//   const words = sentences.split(' ');
//   const reversedWords = words.map(word => reverseString(word));
//   return reversedWords.join(' ')

// }

// const text = "Hello world";
// const result = reverseWordInString(text);
// console.log(result)


// function isPrime(num,divisor = 2){
//   if(num <= 1) return false;

//   if(divisor*divisor > num) return true;

//   if(num % divisor === 0) return false;

//   return isPrime(num,divisor + 1);
// }

// console.log(isPrime(11))
// console.log(isPrime(8))


// function isPrime(num, divisor = 2){
//   if(num<=1) return false;

//   if(divisor*divisor>num) return true;

//   if(num % divisor ===0) return false

//   return isPrime(num,divisor + 1)

// }

// console.log(isPrime(9))


//sum of an array 
// function sumofArr(arr){
//   if(arr.length === 0) return 0;
//   return arr[0]+sumofArr(arr.slice(1));
// }
// const numbers = [1,2,3,4,5,6];
// console.log(sumofArr(numbers));

//patter

// function printPattern(n,current=1,addend = 1){
//   if(current>n)return
//   const sum = current + addend;
//   console.log(`${current} + ${addend} = ${sum}`);
//   printPattern(n, current+1 , addend*2)
// }
// printPattern(6)


// function countDown(n,sub = 0,step = 1){
//   if(n <= 0) return;
// console.log(`${n}`);
// countDown(n - step,sub + 1,step + 1 );
// }

// let num = 100
// countDown(num)


// function removel(str){
//   if(str.length === 0) return ""

//   if(str[0].toLowerCase() === 'l') return removel(str.slice(1))

//     return str[0]+removel(str.slice(1))
// }

// let str = 'Hello World'

// let res = removel(str);

// console.log(res);


// function thirdLargest(arr){
//   let nums = [...new Set(arr)].sort((a,b)=>b-a);
//  return nums.length >= 3?nums[2]:null
// }
// let arr = [1,2,3,4,5]
// console.log(thirdLargest(arr));


// function sumarr(arr){
//   if(arr.length <=0) return 0;

//   return arr[0]+sumarr(arr.slice(1));
// }

// console.log(sumarr([1,2,3,4,5,6]))


