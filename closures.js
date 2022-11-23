// function outer() {
//   let a = 10;
//   var b = 20;
//   console.log(a, b);
//   let inner = () => {
//     console.log("Inner", a, b);
//   };
//   //   inner();
//   return inner;
// }
// outer()();
// console.dir(outer());
// console.log(a, b);

// let a = 10;

// setTimeout(() => {
//   console.log(a);
// }, 1000);
// a = 12;

function multiplier(x) {
  let fn = (y) => {
    return x * y;
  };
  return fn;
}

console.log(multiplier());
let multiplier2 = multiplier(2);
console.log(multiplier2(3));

let multiplier3 = multiplier(3);
console.log(multiplier3);
console.log(multiplier3(4));

console.dir(multiplier2);
console.dir(multiplier3);

function Person(firstName, lastName) {
  // this.firstName = firstName;
  // this.lastName = lastName;
  this.getFullName = () => {
    console.log(`${firstName} ${lastName}`);
  };
}

let p = new Person("Nitin", "Nimangare");
console.log(p);
p.getFullName();
