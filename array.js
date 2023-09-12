// * Exercise
// ? Create an array that contain 4 foods that you like. Then complete these following tasks.

// ? 1. Locate your most favorite food in the array. Print its array index to the console.
// ? 2. Add your 3 favorite desserts or fruits into that array. Print the result to the console.

// ? CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)

//* 1.Locate your most favorite food in the array. Print its array index to the console.
// const febFood = ["fried rice", "tom yum noodles", "crispy pork", "shubu"];
// console.log("My fevorite food:", febFood[3]);

//* 2.Add your 3 favorite desserts or fruits into that array. Print the result to the console.
// febFood.push("banana", "coconut", "mango");
// console.log(febFood);

//* CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)
// febFood = Array.isArray(febFood);
// console.log("My fev food is: ", +febFood);

//* 1.Locate your most favorite food in the array. Print its array index to the console.
// const fevFood = ["fried rice", "tom yum noodles", "crispy pork", "shabu"];
// console.log("My fev food:", fevFood[3]);

//* 2.Add your 3 favorite desserts or fruits into that array. Print the result to the console.
// fevFood.push("banana", "coconut", "mango");
// console.log(fevFood);

//* CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)
// const myFevFood = ["fried rice", "tom yum noodles", "crispy pork", "shabu"];
// myFevFood.includes("shabu", 3);
// console.log(myFevFood);

//* 1.Locate your most favorite food in the array. Print its array index to the console.
const favFood = ["fried rice", "tom yum noodles", "crispy pork", "sushi"];
console.log(favFood.indexOf("sushi"));

//* 2.Add your 3 favorite desserts or fruits into that array. Print the result to the console.
favFood.push("banana", "coconut", "mango");
console.log(favFood);

//* CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)
console.log(favFood.includes("sushi"));
