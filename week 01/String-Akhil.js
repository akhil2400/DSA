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

// function isPallindrome(str){
//   let normalizedString = '';

//   for(let i = 0 ; i<str.length ; i++){
//     const char = str[i];

//     if(char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z' || char >= '0' && char <= '9'){
//       if(char >= 'A' && char <= 'Z'){
//         normalizedString += String.fromCharCode(char.charCodeAt(0) + 32);
//       }else{
//         normalizedString += char;
//       }
//     }
//   }

//   let left = 0;
//   let right = normalizedString.length-1;

//   while(left < right){
//     if(normalizedString[left] !== normalizedString[right]){
//       return false
//     }
//     left ++;
//     right--;
//   }
//   return true;

// }

// console.log(isPallindrome("A man, a plan, a canal: Panama"))
// console.log(isPallindrome("123"))
// console.log(isPallindrome("121"))



const str = 'Akhil is in brototype!!'
console.log(str);
console.log("---------------------------");



// console.log(str.startsWith('A'))//boolean
// console.log(str.endsWith('!'))//boolean


// console.log(str.indexOf('b'))//12
// console.log(str.lastIndexOf('o'))//16


/*extracting substring
----------------------*/

// console.log(str.substring(14));
// console.log(str.substring(14,18));//start:end
// console.log(str.substring(14,-1));//other than selected

// console.log(str.slice(14))//Slice before index 4
// console.log(str.slice(-4))//sliceing from reverse (before index 4)
// console.log(str.slice(4,7)) //4-index to before 7-index
// console.log(str.slice(4,-3)) // both side slicing (before 4-index && reverse also(before index 3))
// console.log(str.slice(-6,-4))//sliceing from reverse (before index 6),once more cutting out of index from back

//just imagine

// let toBeConverted = 123;
// console.log((toBeConverted));
// console.log(String(toBeConverted))

// let toBeConverted = {name:"Akhil"}
// console.log(toBeConverted);
// console.log(String(toBeConverted))//not effective,it won't
// console.log(JSON.stringify(toBeConverted));//now we can stringyfy the objects.

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// console.log('A' === 'a');//false :ASCII value or code (because of 65 !== 97)
// console.log(str.charCodeAt(0));//65 (get the ASCII value of index)
// console.log(String.fromCharCode(65));//ASCII to letters


//string comparison

//const str1 = 'apple';
//const str2 = 'apple';
//console.log(str1.localeCompare(str2)); // 0 complete match
// const str1 = 'apple';
// const str2 = 'appl';
// console.log(str1.localeCompare(str2)); //1 partial match
// const str1 = 'appl';
// const str2 = 'apple';
// console.log(str1.localeCompare(str2));//-1 no match

//console.log(str.includes('A'))// returns booleans

//split and join
// const str1 = 'mern stact developer'
// const arr1 = ['apple','banana']
// console.log(str1.split(''))
// console.log(arr1.join(' and '));


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Question ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Ques1:-------------Truncate the text--------------
  

// function truncate(str,maxlength){
//   if(str.length > maxlength)
//     return str.slice(0,maxlength) + "...";
//   else return str
// }
// console.log(truncate('Akhil is good boy',8));

//Repeating.........
// function truncate(str,maxlength){
//   if(str.length > maxlength) return str.slice(0,maxlength) + "...";
//   return str
// }
// console.log(truncate('Akhil is good boy',8));


//--------------------------------------------------------------------

// //Ques2:-------------- Paliandrome number

  // function ispaliandrome(x){
  //   if(x<0) return false
  //   const strr = x.toString()
  //   const revstrr = strr.split('').reverse().join('')

  //   return strr === revstrr;
  //   }

  //   console.log(ispaliandrome(12))

//-----------------------------------------------------------------

// // //Ques3:---------------- Hamming distance

// function hammingDistance(x,y){
//   if(x.length !== y.length){
//     throw new Error('String must be equal length')
//   }
//   let distance = 0;

//   for(let i = 0;i<x.length;i++){
//     if(x[i] !== y[i]){
//       distance++
//     }
//   }
//   return distance;
// }
// console.log(hammingDistance('apple','aoplw'))


// //Ques4:---------------- Hamming distance in leet code 461;

// function hammingDistance(x,y){
//   x= x.toString(2);
//   y = y.toString(2);
//   console.log(x,y);

//      if(x.length < y.length){
//       while(x.length !== y.length) x = "0"+x
//      }else{
//       while(x.length !== y.length) y = "0"+y
//      }
//      console.log(x,y);

//      let distance = 0;

//      for(i=0; i<x.length;i++){
//       if(x[i] !== y[i]){
//         distance++
//       }
//      }
//      return distance;
// }

// console.log(hammingDistance(1,4));

// ---------------------------------------------
















