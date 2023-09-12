// for (let i = i; i <= 3; i++) {
//     console.log('hello world')
// }

// function loopThroughArray() {
//   const tripLocation = ["London", "Bali", "Amsterdam", "Paris"];

//   for (let i = 0; i < tripLocation.length; i++) {
//     console.log(tripLocation[i]);
//   }

// * Reverse Loop through array
//   for (let i = tripLocation.length - 1; i >= 0; i--) {
//     console.log(tripLocation[i]);
//   }

// * Break keyword [stop and go out loop]
//   for (let i = 0; i < tripLocation.length; i++) {
//     if (tripLocation[i] === "Bali") {
//       break;
//     }
//     console.log(tripLocation[i]);
//   }

// * Continue keyword [stop and go to next loop]
//   for (let i = 0; i < tripLocation.length; i++) {
//     if (tripLocation[i] === "Bali") {
//       continue;
//     }
//     console.log(tripLocation[i]);
//   }
// }

// loopThroughArray();

// * While Loop

// function whileLoop() {
//   let i = 0;
//   while (i < 5) {
//     console.log(i);
//     i++;
//   }
// * While loop is use to repeat a specific block of code an unknown number of times, until a condition
//   let count = 1;
//   while (count < 100) {
//     count = count + 2;
//   }
//   console.log(count);
// }

// whileLoop();

//* NestedLoop [can't run main loop before sub loop run success]

// function NestedLoop() {}

// Exercise
// Write a code that will loop from 0 to 15. for each loop, it will check if
// the current index number is odd or even, and display a message to the console

// example output
// 0 is even
// 1 is odd
// 2 is even
// 3 is odd

function forLoop() {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}

forLoop();
