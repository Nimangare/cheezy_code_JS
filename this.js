// 1st rule
// const obj1 = {
//   firstName: "Nitin",
//   lastName: "Nimangare",
//   getFullName: function () {
//     console.log(obj1);
//     console.log(`${this.firstName}  ${this.lastName}`);
//     console.log(this);
//   },
//   address: {
//     street: "Jambhe,Pune",
//     city: "Pune",
//     getAddress: function () {
//       console.log(`${this.street} ${this.city}`);
//       //   console.log(this.firstName);
//       console.log(this);
//     },
//   },
// };
// obj1.getFullName();
// obj1.address.getAddress();
// const obj2 = {
//   firstName: "Gajanan",
//   lastName: "Kope",
//   getFullName: function () {
//     console.log(obj2);
//     console.log(`${this.firstName}  ${this.lastName}`);
//   },
// };

// obj1.getFullName();
// obj2.getFullName();

// 2nd rule
// function person(firstName, lastName) {
//   // let this={}
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.getFullName = function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   };
//   // return this;
// }
// let p1 = new person("Nitin", "Nimangare");
// console.log(p1);
// p1.getFullName();

// let p2 = new person("Gjanan", "Kope");
// console.log(p2);
// p2.getFullName();

// 3rd rule
// function printMessage() {
//   console.log(this);
// }
// printMessage();
// function person(firstName, lastName) {
//   // let this={}
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.getFullName = function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   };
//   // return this;
// }
// person("Sagar", "Patole");
// console.log(person);

function printMessage() {
  console.log(this);
}
let obj = new printMessage();
console.log(obj);
