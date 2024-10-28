// Rekursiv funksiyaga oid
// 1-misol
// function sumToN(n) {
//     if (n === 1) return 1; 
//     return n + sumToN(n - 1); 
// }

// console.log( sumToN(5));

// 2-misol
// function factorial(n) {
//     if (n <= 1) return 1;
//     return n * factorial(n - 1); 
     
// }
// console.log(factorial(5)); 


// Class oid masalalar
// 1-misol
// class Car {
//     constructor(name, year, color) {
//       this.name = name;
//       this.year = year;
//       this.color = color;
//     }
//   }
//     let Carnew = new Car("Toyota", 2021, "balck");
//   console.log(Carnew);
  

// 2-misol
// class Rectangle {
//     constructor(uzunligi, kengligi) {
//       this.uzunligi = uzunligi;
//       this.kengligi = kengligi;
//     }
//     getArea() {
//       return this.uzunligi * this.kengligi;
//     }   
//   }
  
  
//   const myRectangle = new Rectangle(5, 10);
//   console.log(`${myRectangle.getArea()}`); 
  

// String metodlariga oid
// 1-misol
// let str = "salom"
// function getCharAt(str, index) {
//     return index < str.length ? str.charAt(index) : "";
//   }
//   console.log(getCharAt(str));
  
// // 2-misol
// let str = "salom"
//   function getLastChar(str) {
//     return str.charAt(str.length - 1);
//   }
//   console.log(getLastChar(str));
  
  
// //   3-misol
// let str = "salom"

//   function Chart(str) {
//     for (let i = 0; i < str.length; i++) {
//       console.log(str.charAt(i));
//     }
//   }
//   console.log(Chart(str));
  
  
 // ChartCode
 // 1-misol
//  let str = "salom"
//  function CharCode(str, index) {
//     return (str.charCodeAt(index));
//   }
//   console.log(CharCode(str));
  

//   At oid masalar
// 1-misol
//  let str = "salom"
// function UsingAt(str, index) {
//     return (str.at(index));
//   }
//   console.log(UsingAt(str));
  
  
// 2-misol
//  let str = "salom"
//   function UsingAt(str) {
//     return (str.at(-1));
//   }
//   console.log(UsingAt(str));
  
// 3-misol
//  let str = "salom"
//   function At(str, index) {
//     return (str.at(index));
//   }
//   console.log(At(str));

// Slice oid masalalar

// 2-misol  
// let str = "salom"
//   function slice(str) {
//     return (str.slice(0, 3));
//   }
//   console.log(slice(str));
  
// 3-misol
// let str = "yaxshimisizlar"
//   function slice(str) {
//     return (str.slice(-5));
//   }
//   console.log(slice(str));


// substring oid masalalar
// 1-misol
// let str = "yaxshimisizlar"
// function substring(str, start, end) {
//     return (str.substring(start, end));
//   }
//   console.log(substring(str));
  
//   2-misol
// let str = "salom"
//   function substring(str) {
//     return (str.substring(0, 4));
//   }
//   console.log(substring(str));
  
//   3-misol
// let str = "salom"
//   function substring(str) {
//     return (str.substring(4));
//   }
//   console.log(substring(str));
  


//  substr
// 1-misol
// function substr(v, i, a) {
//   return v.substr(i, a);
// }
// console.log(substr("JavaScript", 1, 3)); 


// 2-misol
// function substr(v, i) {
//   return v.substr(Math.floor(v.length / 2) - Math.floor(i / 2), i);
// }
// console.log(substr("JavaScript", 5)); 


// 3-misol
// function substrLastChars(v, i) {
//   return v.substr(-i);
// }
// console.log(substrLastChars("JavaScript", 4)); 



//   trim
// 1-misol
// function trim(str) {
//     return str.trim();
//   }
//   console.log(trim("   salom   ")); 
  

// 2-misol
//   function trim(str) {
//     return str.trimStart();
//   }
//   console.log(trim("   salom   "));
  

// 3-misol
//   function trim(str) {
//     return str.trimEnd();
//   }
//   console.log(trim("   salom!   ")); 
  
  
// pad
// 1-misol
// function pad(v, i, a) {
//     return v.padEnd(i, a);
//   }
//   console.log(pad("salom", 6, "0")); 
  

// 2-misol
//   function pad(v, i, a) {
//     return v.padStart(i, a);
//   }
//   console.log(pad("salom", 10, "*")); 
  

// 3-misol
//   function format(num) {
//     return num.padStart(8, "0");
//   }
//   console.log(format("12345")); 


// repeat

// 1-misol
// function repeatString(str, num) {
//     return str.repeat(num);
//   }
//   console.log(repeatString("salom", 3)); 
  

// replace

// 1-misol
// function replace(str, num) {
//     return str.replace(str[0], num);
//   }
//   console.log(replace("salom", "A")); 
  

// 3-misol
 
//   function replace(str) {
//     return str.replace(/\d/, "*");
//   }
//   console.log(replace("salom123")); 



// Idexof

// 1-misol
// function firstOccurrenceIndex(str, arg) {
//   return str.indexOf(arg);
// }
// console.log(firstOccurrenceIndex("JavaScript salom", "salom")); 

// 2-misol
// function findWordIndex(str, word) {
//   return str.indexOf(word);
// }
// console.log(findWordIndex("JavaScript salom", "Html"));

// 3-misol
// function findCharIndex(str, arg) {
//   return str.indexOf(arg);
// }
// console.log(findCharIndex("JavaScript", "a"));


//  lastIndexOf

// 1-misol
// function lastOccurrenceIndex(str, arg) {
//   return str.lastIndexOf(arg);
// }
// console.log(lastOccurrenceIndex("JavaScript salom  salom", "salom"));

// 2-misol
// function findLastSpaceIndex(str) {
//   return str.lastIndexOf(" ");
// }
// console.log(findLastSpaceIndex("JavaScript salom hayr salom"));

// 3-misol
// function findLastNumberIndex(str) {
//   return str.lastIndexOf("5");
// }
// console.log(findLastNumberIndex("javaScript 12345"));
