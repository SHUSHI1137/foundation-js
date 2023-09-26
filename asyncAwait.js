// const fetchData = () => Promise.reject("Not found data");

// const getData = async () => {
//   try {
//     const res = await fetchData(); // await waiting for return result on promise for take it to something

//     console.log(res); // res = it's mean 'respont'
//   } catch (err) {
//     console.log(err);
//   }
// };

// getData();

//* Example for fetch multiple data

const fetchData1 = () => Promise.resolve("data1");
const fetchData2 = () => Promise.resolve("data2");
const fetchData3 = () => Promise.resolve("data3");

const getMultipleData = async () => {
  try {
    const result = await fetchData1();
    const result2 = await fetchData2();
    const result3 = await fetchData3();

    console.log(result);
    console.log(result2);
    console.log(result3);
  } catch (err) {
    console.log(err);
  }
};

getMultipleData();
