//* Object : JavaScript Object Declaration
// const object_name = {
//     key1: value1
//     key2: value2
// }

//* Example
// const person = {
//     name: "John",
//     age: 20,
// }

//*Object - Accessing Object Properties

//?Using dot nonation
// const person = {
//     name: "John",
//     age: 20,
// }
// console.log(person.name) // John

//? Using bracket notation
// const person = {
//     name: "John",
//     age: 20,
// }

// console.log(person["name"]) //John

//* Object: JavaScript Object can contain function
// const person = {
//   name: "John",
//   age: 20,
//   greet: () => {
//     console.log("Hello");
//   },
// };

// person.greet();

//* Object: Nested Object
// const person = {
//   name: "Ae",
//   age: 29,
//   pet: {
//     kind: "cat",
//     age: "2",
//   },
// };

// const keyName = "name";

// console.log("Name", person.name); //* Access using dot notation
// console.log("Name", person[keyName]); //* Access using bracket notation

//* Review Reference Type
// const person2 = person;
// person2.name = "Mario";

// console.log("person 1:", person);
// console.log("person 2:", person2);

//! Exercise
const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

//* Solution 1
// data.forEach((ndata, idx) => {
//   console.log("Person", idx + 1);
//   console.log("name", ndata["name"]);
//   console.log("age", ndata["age"]);
//   console.log("job", ndata["job"]);
//   console.log("-----------");
// });

//* Solution 2
// data.forEach((ndata, idx) => {
//   console.log(
//     "Person",
//     idx + 1,
//     "\n",
//     "Name",
//     ndata["name"],
//     "\n",
//     "Age",
//     ndata["age"],
//     "\n",
//     "Job",
//     ndata["job"],
//     "\n",
//     "--------------------\n"
//   );
// });

//* Solution 3
// const resultString = data.reduce((prevVal, val, idx) => {
//   return `${prevVal}\n
//     Person ${idx + 1}\n
//     Name: ${val.name}\n
//     Age: ${val.age}\n
//     Job: ${val.job}\n
//     -----------------`;
// }, "");

// console.log(resultString);
