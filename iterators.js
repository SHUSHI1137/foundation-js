const prices = [20, 15, 30, 40, 55];

//* .forEach
// prices.forEach((price, idx) => {
//   console.log(idx, price);
// });

//* .map
const newPrices = prices.map((price) => {
  return price * 1.2;
});

console.log(newPrices);
