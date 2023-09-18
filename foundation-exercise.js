//? ref : https://github.com/CleverseAcademy/foundation-js-cohort2

//? ************Easy****************

//? Easy 1 write a function mapRevertSign(arr) takes in an array of numbers, and returns a new array of numbers containing opposite signs of the original array.
//* Pattern 1
// const mapReverstSign = (arr) => {
//   const result = [];

//   arr.forEach((elem) => {
//     result.push(0 - elem);
//   });
//   return result;
// };

// console.log(mapReverstSign([1, -4, 2, 0]));

//* Pattern 2
// const mapReverstSign2 = (arr) => {
//   return arr.map((elem) => {
//     return 0 - elem;
//   });
// };

// console.log(mapReverstSign2([1, -4, 2, 0]));

//? Easy 2: Write a function reverse(arr) returns a new array which is arr reversed. [not allowed to use Array.reverse method]
//* Pattern 1
// const arr = { nArr: [1, 2, 3, 4, 5] };

// arr.nArr[0] = 5;
// arr.nArr[1] = 4;
// arr.nArr[2] = 3;
// arr.nArr[3] = 2;
// arr.nArr[4] = 1;

// console.log(arr);

//? Easy 3: Write function isMember(mem, arr) return a boolean indicating whether mem is a member of arr
// const isMember = (mem, arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === mem) {
//       return true;
//     }
//   }

//   return false;
// };

// console.log(isMember("john", ["jane", "jim", "john"]));
// console.log(isMember(5, [1, 3, 7, 12]));

//? Easy 4: Write a function unique(arr) taskes in an array of numbers arr and returns a new array whose elements are unique.
// //* Pattern 1
// const arr = [10, 20, 10, 20, 30, 50, 60, 100];
// const cDup = [...new Set(arr)];

// console.log(cDup);

//? Easy 5: write a function draw(n) takes in a number n, and prints the starts (*) into the console in this pattern
//* Pattern 1
// const draw = (n) => {
//   for (let i = 0; i <= 5; i++) {
//     if (i < 5) {
//       console.log("// *****");
//     }
//   }
// };

// draw(5);

//? Easy 6: Re-wconst rite draw(n) as drawNg(n) (-ng suffix is usually used for next-gen) Like draw(n), but this time drawNg(n) prints this pattern
//* Pattern 1
// const drawNg = (n) => {
//   if (n < 0) return;

//   //* Loop for each start
//   for (let i = 0; i < n; i++) {
//     // * Initialize s
//     let s = "";

//     // * Loop for each star
//     for (let j = 0; j <= i; j++) {
//       s += "*";
//     }
//     console.log(s);
//   }
// };

// drawNg(5);

//* Pattern 2: Another solution for 'drawNg' which is mush more efficient
// const drawNg = (n) => {
//   if (n < 0) return;
//   let pattern = "";

//   for (let i = 0; i < n; i++) {
//     pattern += "*";
//     console.log(pattern);
//   }
// };

// drawNg(5);

// const drawNg()
//     let text = "";
//     for(let i = 0; i < text; i++) {
//         text += "*"
//     }

// console.log(drawNg)

//? Easy 7: write a function mutual(arr1, arr2) mutual(arr1, arr2) returns a new array containing all mutual members of arr1 and arr2
// const class1 = ["Alice", "Bob", "John", "Jane"];
// const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

// const classSum = class1.concat(class2);

// function getDupClass(data) {
//   return data.filter((value, idx) => data.indexOf(value) !== idx);
// }

// console.log(getDupClass(classSum));

// const classAll = class1.concat(class2);
// classAll.filter((element, index) => {
//   return classAll.indexOf(element) === index;
// });

// const classSum = class1.concat(class2);

// const classDup = [];
// classSum.forEach((element) => {
//   if (!classDup.includes(element)) {
//     classDup.push(element);
//   }
// });

// console.log(classDup);

//? Easy 8
// const fizzBuzz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzBuzz(20);

//!
// function fizzBuzz() {
//   const item = (n) => {
//     const range = (start, end) => {
//       const rangeArr = [];
//       for (let i = start; i <= end; i++) {
//         rangeArr.push(i);
//       }
//     };
//   };
//   return rangeArr;
// }

// fizzBuzz();
//!

//!
// const fizzBuzz = (n) => {
//   const range = (start, end) => {
//     const rangeArr = [];
//     for (let i = start; i <= end; i++) {
//       rangeArr.push(i);
//     }

//     return rangeArr;
//   };
// };

// fizzBuzz(fizzBuzz(1, 20));
//!

//!
// const range = (start, end) => {
//   const rangeArr = [];
//   for (let i = start; i <= end; i++) {
//     rangeArr.push(i);
//   }
//   return rangeArr;
// };

// const result = range(1, 20);

// console.log(result);
//!

//? Easy 9
// const gcd = (a, b) => {
//   for (; b !== 0; ) {
//     const temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// };

// console.log(gcd(10, 15)); // 5
// console.log(gcd(18, 12)); // 6
// console.log(gcd(3, 2)); // 1

//? Easy 10
// const filterLt = (n, arr) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < n) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

// const arr = [120, 112, 111, 130, 169, 101];
// // const filterNum = filterLt(0, arr); // []
// const filterNum = filterLt(112, arr);

// console.log(filterNum);

//!
// const filterLt = (n, arr) => {
//   const result = [];
//   for (let i = 0; i < n.length; i++) {
//     const keepResult = arr(n[i]);
//     if (keepResult) {
//       result.push(n[i]);
//     }
//   }

//   return result;
// };

// const beforeEdit = [120, 112, 111, 130, 169, 101];

// const afterEdit = filterLt(beforeEdit, (item) => {
//   return item > 0;
// });

// filterLt(0, arr);
// filter(112, arr);
//!

//!
// const filterLt = (n, arr) => {
//     for (i = n; i === arr; i++) {
//         n = n - 1;
//     }
//     return n
// }

// console.log(filterLt(120, 112, 111, 130 ))
//!

//? Easy 11
// const filterGt = (n, arr) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > n) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

// const arr = [120, 112, 111, 130, 169, 101];
// // const filterNum = filterGt(0, arr); // [120, 112, 111, 130, 169, 101]
// const filterNum = filterGt(112, arr); // [120, 130, 169]

// console.log(filterNum);

//? Easy 12
//* Pattern 1
// const compoundedReturn = (amount, interestPercent, periods) => {
//   for (let i = 0; i < periods; i++) {
//     amount = amount * (1 + interestPercent / 100);
//   }

//   return amount;
// };

// console.log(compoundedReturn(100, 20, 2));

//* Pattern 2
// const compoundedReturn = (amount, interestPercent, periods) => {
//   return amount * (1 + interestPercent / 100) ** periods;
// };

// console.log(compoundedReturn(100, 20, 2));

//? Easy 13
// !
//* Pattern 1
// const mean = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") {
//       return null;
//     }
//   }

//   return arr;
// };

// console.log(mean([1, 2, 3]));
// console.log(mean([1, "foo", 3]));
//!

//!
//* Pattern 2
// const mean = (arr) => {
//   if (arr.length === 1) return arr;

//   const avgResult = Math.round(arr);

//   if (arr.length >= 0) {
//     return arr;
//   }

//   return [null];
// };

// console.log(mean([1, 2, 3]));
// console.log(mean([1, "foo", 3]));
//!

//* Pattern 3
// const mean = (arr) => {
//   let sum = 0;

//   const isAllNumber = arr.every((val) => typeof val === "number");
//   if (!isAllNumber) return null;

//   arr.forEach((n) => {
//     sum += n;
//   });

//   return sum / arr.length;
// };

// console.log(mean([1, 2, 3])); // 2
// console.log(mean([1, "foo", 3])); // null

//? Easy 14
// const mid = (arr) => {
//   if (arr.length === 1) return arr;

//   const middlePosition = Math.floor(arr.length / 2);

//   if (arr.length % 2 === 0) {
//     const elem1 = arr[middlePosition - 1];
//     const elem2 = arr[middlePosition];

//     return [elem1, elem2];
//   }

//   return [arr[middlePosition]];
// };

// console.log(mid(["join"]));
// console.log(mid(["foo", "bar", "baz"]));
// console.log(mid([1, 2, 3, 4]));

//? Easy 15
// //* Pattern 1
// const arr = [3, 2, 1, 12, 13, 11];
// arr.sort(function (a, b) {
//   return a - b;
// });

// console.log(arr);

//* Pattern 2
// const arr = [3, 2, 1, 12, 13, 11];
// arr.sort((a, b) => a - b);

// console.log(arr);

//? Easy 16

//? Easy 18
// const flatMap = (arr) => {
//   const flattened = [];

//* Since we sent the nested array into this function, elem is also an array
//   arr.forEach((elem) => {
//* 1st loop
//* elem -> [1, 2, 3]
//* flattened.push(1, 2, 3)
//     flattened.push(...elem);
//   });

//   return flattened;
// };

// const arr = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];

// console.log(flatMap(arr));

//? Easy 21
// const toBytes = (s) => {
//   //* We don't know yet if (s) contains any non-ASCII char,
//   //* so we start with empty an array.
//   const bytes = [];

//   for (let i = 0; i < s.length; i++) {
//     const char = s.charCodeAt(i);

//     if (char > 255) {
//       continue;
//     }

//     bytes.push(char);
//   }

//   return bytes;
// };

// console.log(toBytes("Bar")); //* [66, 97, 114]
// console.log(toBytes("Foo")); //* [70, 111, 111]
// console.log(toBytes("Foo🔥")); //* [70, 111, 111]

//? **********Medium**********
//? Medium 1
// const maxNegminPos = (arr) => {
//   // These could be null
//   let maxNeg = null;
//   let minPos = null;

//   for (let i = 0; i < arr.length; i++) {
//     const elem = arr[i];

//     if (elem < 0) {
//       //* negative num
//       if (!maxNeg) {
//         maxNeg = elem;
//         continue;
//       }

//       if (elem > maxNeg) {
//         maxNeg = elem;
//       }
//     } else {
//       //* positive num
//       if (!minPos) {
//         minPos = elem;
//         continue;
//       }

//       if (elem < minPos) {
//         minPos = elem;
//       }
//     }
//   }

//   console.log(`MaxNeg is ${maxNeg}\nMinPos is ${minPos}`);
// };

// maxNegminPos([-12, 13, -4, 4, 12, 1, -18]);
