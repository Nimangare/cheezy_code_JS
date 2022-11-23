const isEven = (num) => {
  return num % 2 == 0;
};
console.log(isEven(12));
// Array.Proptotype.filter()
let arr = [1, 2, 3, 4, 5];
const arr2 = arr.filter(isEven);
console.log(arr2);

console.log(
  arr.filter(function (num) {
    return num % 2 === 0;
  })
);

console.log(arr.filter((num) => num % 2 === 0));

// Array.Prototype.ForEach()
console.log(arr.forEach((element) => console.log(element)));

// Array.Prototype.map()
console.log(arr.map((value) => value * value));

// Array.Prototype.find()

console.log(arr.find((value) => value === 4));

// Array.Prototype.findIndex()
console.log(arr.findIndex((value) => value == 4));
