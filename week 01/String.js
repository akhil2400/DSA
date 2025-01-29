// // encrypting a string

// function shiftStr(str,n){
//   function shiftChar(str,n){
//     const isLowerCase = str >= 'a' && str <= 'z';
//     const isUpperCase = str >= 'A' && str <= 'Z';

//     if(isLowerCase){
//       return String.fromCharCode(((str.charCodeAt(0)-97+n)%26)+97);
//     }else if(isUpperCase){
//       return String.fromCharCode(((str.charCodeAt(0)-97+n)%26)+97);
//     }else{
//       return str;
//     }
    
//   }
//   return str.split('').map((char)=>shiftChar(char,n)).join('')
// }

// const input = "Hello World"
// const shiftValue = 2;

// const encrypt = shiftStr (input,shiftValue)
// console.log(encrypt)
// const decrypt = shiftStr(encrypt,-shiftValue)
// console.log(decrypt)



//Again pract

// function shiftStr(str,n){
//   function shiftChar(str,n){
//     const isLowerCase = str >= 'a' && str <= 'z';
//     const isUpperCase = str >= 'A' && str <= 'Z';

//     if(isLowerCase){
//       return String.fromCharCode(((str.charCodeAt(0)-97+n)%26)+97);
//     }
//     else if(isUpperCase){
//       return String.fromCharCode(((str.charCodeAt(0)-97+n)%26)+97);
//     }
//     else{
//       return str
//     }

//   }
//   return str.split('').map((char)=>shiftChar(char,n)).join('');
// }

// const input = "Hello world"
// const shiftValue = 2;

// const encrypt = shiftStr(input,shiftValue);
// console.log(encrypt);
// const decrypt = shiftStr(encrypt,-shiftValue);
// console.log(decrypt)


//reverse the words in a sentence

// function reverseWordsInSentences(sente){
//   let res = '';
//   let word = '';

//   for(let i = 0; i<sente.length; i++){
//     if(sente[i] !== ''){
//       word = sente[i]+ word;
//     }else{
//       res += word+" ";
//       word = ' ';
//     }
//   }
//   res += word;
//   return res;
// }

// const sente = "Hello world this is javascript";

// const res = reverseWordsInSentences(sente);

// console.log(res)

// pract
//=======
// function RS(sent){
//   let word = '';
//   let res = '';

//   for(let i = 0 ; i<sent.length ; i++){
//     if(sent[i] !== ''){
//       word = sent[i]+word;
//     }else{
//       res += word + " ";
//       word = ' ';
//     }
//   }
//   res += word;
//   return res
// }
// const sent = "Hello world this is javascript"
// const res = RS(sent)
// console.log(res);


//c.	Write a function to check if a given string is a palindrome. Ignore spaces, punctuation, and capitalization.

function isPallindrome(str){
  let normalizedString = '';

  for(let i = 0 ; i<str.length ; i++){
    const char = str[i];

    if(char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z' || char >= '0' && char <= '9'){
      if(char >= 'A' && char <= 'Z'){
        normalizedString += String.fromCharCode(char.charCodeAt(0) + 32);
      }else{
        normalizedString += char;
      }
    }
  }

  let left = 0;
  let right = normalizedString.length-1;

  while(left < right){
    if(normalizedString[left] !== normalizedString[right]){
      return false
    }
    left ++;
    right--;
  }
  return true;

}

console.log(isPallindrome("A man, a plan, a canal: Panama"))
console.log(isPallindrome("123"))
console.log(isPallindrome("121"))







