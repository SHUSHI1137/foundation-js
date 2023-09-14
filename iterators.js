//* Structure Iterators method

// const tripLocation = ["London", "Bali", "Amsterdam", "Paris"]
//  tripLocation.methodName(callbakfn)
//  "Calls the callbackfn one time for each element in the array"

const prices = [20, 15, 30, 40, 55];

//* .forEach: .forEach(callbackfn): return void
//! callbackfn: (value, index) => return voide
//! value = current element , index = current index
// prices.forEach((price, idx) => {
//   console.log(idx, price);
// });

//* .map: .map(callbackfn): return new array
//! callbackfn: (value, index) => return value
//! value = current element , index = current , value = callbackfn should return a value
const newPrices = prices.map((price) => {
  return price * 1.1;
});

console.log("New Price:", newPrices);

//* .filter: .filter(callbackfn): return filtered array
//! callbackfn: (value, index) => return boolean
//! value = current element, index = current index, return boolean = callbackfn return boolean
const premiumPrices = newPrices.filter((price) => {
  return price > 30;
});

console.log("Premium Prices:", premiumPrices);

//* .reduce: .reduce(callbackfn): return reduce value
//* value is final result from all elements calculated together
//! callbackfn: (preVal, value, index) => return value
//! prevVal = previous value (from the previous iteration), value = current element, index = current index, value return = callbackfn should return a value
//! .reduce(callbackfn, initialValue): return reduced value [initialValue is optional สำหรับใส่ค่าเริ่มต้นของ prevVal]
const sumPrice = newPrices.reduce((prevVal1, price) => {
  return prevVal1 + price;
  // 10 = initialValue
}, 10);

console.log("Sum Price: ", sumPrice);

//* method .some not return value and return boolean and check one array for return boolean when check one condition true .some stop process and return true
// const list = [1, 2, 3, 4, 5];

// const haveEven = list.some((value) => {
//   return value % 2 === 0;
// });
// console.log(haveEven);

//* method every not return value and return boolean and check all array for return boolean when check all condition and have a one false in condition .every return false
const list = [1, 2, 3, 4, 5];

const allEven = list.every((value) => {
  return value % 2 === 0;
});
console.log(allEven);
