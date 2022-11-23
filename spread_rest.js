//
// rest parameter
function sum2(...a) {
  console.log(a);
}
sum2(1, 2, 3, 4, 5);
sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

// spread Paramter
let arr = [1, 2, 3, 4];
let arr2 = [...arr, 5, 6, 7];
console.log(arr2);
let arr3 = [...arr];
console.log(arr === arr3, arr3);

let merge = [...arr, ...arr2];
console.log(merge);

// Spread Operator in Object
let Person = {
  firstName: "Nitin",
  lastName: "Nimangare",
  age: 28,
};
let Person2 = { ...Person, address: "Pune" };
console.log(Person2);
console.log(Person === Person2);
