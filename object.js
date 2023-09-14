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

// data.forEach((ndata, idx) => {
//   console.log("Person", idx + 1);
//   console.log("name", ndata["name"]);
//   console.log("age", ndata["age"]);
//   console.log("job", ndata["job"]);
//   console.log("-----------");
// });

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

const resultString = data.reduce((prevVal, val, idx) => {
  return `${prevVal}\n
    Person ${idx + 1}\n
    Name: ${val.name}\n
    Age: ${val.age}\n
    Job: ${val.job}\n
    -----------------`;
}, "");

console.log(resultString);
