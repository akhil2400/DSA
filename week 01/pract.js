// 

// function range (s,e){
//   if(e<s){
//     return [];
//   }else{
//     const num = range(s,e-1);
//     num.push(e);
//     return num;
//   }

// }

// console.log(range(1,5));

function isPallindrome(num) {
  let str = num.toString()
  function check(start, end) {
    if (start >= end) return true;
    if (str[start] !== str[end]) return false;
    return check(start + 1, end - 1)
  }
  return check(0, str.length - 1)
}


console.log(isPallindrome(123))
console.log(isPallindrome(121))
