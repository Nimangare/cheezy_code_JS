const stdudent1 = {
  firstName: "Nitin",
  lastName: "Nimangare",
  getFullName: function () {
    console.log(`${this.firstName}  ${this.lastName}`);
  },
};

// const stdudent2 = {
//   firstName: "Nitin",
//   lastName: "Nimangare",
//   getFullName: function () {
//     console.log(`${this.firstName}  ${this.lastName}`);
//   },
// };

// function createStudent(firstName, lastName) {
//   const stdudent2 = {
//     firstName,
//     lastName,
//     getFullName: function () {
//       console.log(`${this.firstName}  ${this.lastName}`);
//     },
//   };
//   return stdudent2;
// }

// const stdudent3 = createStudent("Gajanan", "Kope");
// console.log(stdudent3);

// constuctor function
function stdudent(firstName, lastName) {
  // let this={}
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
  };
  // return this;
}

const obj = new stdudent("Nitin", "Nimangare");
console.log(obj);
obj.getFullName();
