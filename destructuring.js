let num = [1, 2, 3, 4, 5];
// let first = num[0];
// console.log(first);

// arrat destructuring
let [first, second] = num;
console.log(first, second);

// object destructuring
let Person = {
  firstName: "Nitin",
  lastName: "Nimangare",
  age: 28,
};
let { firstName } = Person;
// aliasing in Object  destructuring
let { firstName: firstX, lastName, age } = Person;
console.log(firstX, lastName, age);
