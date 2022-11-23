// Block Scope
// let a = 10;
// if (a == 10) {
//   let b = 20;
//   const c = 30;
//   console.log(b, c);
// }
// console.log(a);
// // console.log(b);
// // console.log(c);

// {
//   let d = 40;
// }
// // console.log(d);

// // Global SCope
// let x = 12;
// const y = 123;
// console.log(x, y);

// Function Scope
function func1() {
  let fx = 12;
  const fy = 123;
  console.log(fz); // Here var is Hoisted
  {
    console.log(fx);
    console.log(fy);
    var fz = 1234;
  }
  console.log(fz);
}
// console.log(fx);
// console.log(fy);
// console.log(fz);
func1();
