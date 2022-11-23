// let sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(1, 2));

// let sum2 = (a, b) => {
//   return a + b;
// };
// console.log(sum2(1, 2));

// let sum3 = (a, b) => a + b;
// console.log(sum3(1, 2));

// let square = function (a) {
//   return a * a;
// };

// let square2 = (a) => {
//   return a * a;
// };

// let square3 = (a) => a * a;

// console.log(square3(2));

// let print = () => {
//   console.log("Hello");
// };

// let print2 = () => console.log("Hello");
// print2();

// 1: concise
// 2:Implicit return
// 3:this
window.firstName = "Sundar";
const obj = {
  firstName: "Nitin",
  lastName: "Nimangare",
  getFullName: function () {
    console.log(this);
    console.log(`${this.firstName}  ${this.lastName}`);
  },
  getArrowFullName: () => {
    console.log(this);
    console.log(`${this.firstName}  ${this.lastName}`);
  },
};
obj.getFullName();
obj.getArrowFullName(); // Not Binding for Arrow Function
