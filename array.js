const myArr = ["Ae", 29];

// console.log("My name:", myArr[0]);
// console.log("My age:", myArr[1]);

//* output undefined
//console.log(myArr[10]);

//* slice: method return selected elements in array, as a new array
// const newArr = myArr.slice(1, 4);

// console.log(newArr);

//* output -1
// console.log(myArr.indexOf(22));

//* concat: method for join two or more arrays and returns a new array, containing the joined arrays
// const newArr2 = myArr.concat("hello", "cleverse academy");

// console.log(myArr);
// console.log(newArr2);

// const hello = ["H", "e", "l", "l", "o"];

//* pop: method removes the last element of array and returns the removed element.
// const a = hello.pop;
// console.log(hello);

// const b = hello.pop;
// console.log(hello);

// * Exercise
// ? Create an array that contain 4 foods that you like. Then complete these following tasks.

// ? 1. Locate your most favorite food in the array. Print its array index to the console.
// ? 2. Add your 3 favorite desserts or fruits into that array. Print the result to the console.

// ? CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)

//? 1.Locate your most favorite food in the array. Print its array index to the console.
// const likeFood = ["fried rice", "tom yum noodles", "crispy pork", "shubu"];
// console.log("My fevorite food:", likeFood[3]);

//? 2.Add your 3 favorite desserts or fruits into that array. Print the result to the console.
// likeFood.push("banana", "coconut", "mango");
// console.log(likeFood);

//? CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)
// likeFood = Array.isArray(likeFood);
// console.log("My fev food is: ", +likeFood);

//? 1.Locate your most favorite food in the array. Print its array index to the console.
// const myFevFood = ["fried rice", "tom yum noodles", "crispy pork", "shabu"];
// console.log("My fev food:", myFevFood[3]);

//? 2.Add your 3 favorite desserts or fruits into that array. Print the result to the console.
// myFevFood.push("banana", "coconut", "mango");
// console.log(myFevFood);

//? CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)
// const myFevFood = ["fried rice", "tom yum noodles", "crispy pork", "shabu"];
// myFevFood.includes("shabu", 3);
// console.log(myFevFood);

//? 1.Locate your most favorite food in the array. Print its array index to the console.
const favFood = ["fried rice", "tom yum noodles", "crispy pork", "sushi"];
console.log(favFood.indexOf("sushi"));

//? 2.Add your 3 favorite desserts or fruits into that array. Print the result to the console.
favFood.push("banana", "coconut", "mango");
console.log(favFood);

//? CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)
console.log(favFood.includes("sushi"));
