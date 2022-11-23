// Hoisting with variable
console.log(a); // undefined
var a = 12;
console.log(a); // 12

// console.log(b); // not Hoisted
let b = 123;
console.log(b);

// Hoisting with function keyword i.e function declaration eg function(){}
fn(); // hoisted
function fn() {
  console.log("function declaration");
}
// fn2(); // not His=osted
// let fn2 = function () {
//   console.log("function expression");
// };

// Hoisting example

var x = 20;
var x;
console.log(x);

// let y = 12;
// let y;
// console.log(y);

// const z = 123;
// const z;
// console.log(z)

var x = 10;
console.log(x);
function fn3() {
  console.log(x);
  var x = 20;
  console.log(x);
}
fn3();
