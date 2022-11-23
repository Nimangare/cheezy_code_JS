// Higher Order Function
// First class Function

// function add(a, b) {
//   return a + b;
// }
// function power(a, b) {
//   return Math.pow(a, b);
// }

// function operation(a, b, fn) {
//   let result = fn(a, b);
//   return result;
// }
// console.log(operation(2, 3, add));
// console.log(operation(2, 3, power));

// function outer() {
//   function inner() {
//     console.log("Inner");
//   }
//   return inner;
// }
// outer()();

function Emp(name, age, dept) {
  this.name = name;
  this.age = age;
  this.dept = dept;
}
let employess = [
  new Emp("Nitin", 28, "IT"),
  new Emp("Sagar", 22, "HR"),
  new Emp("Gajanan", 23, "CS"),
];

// function filterByAge(emp, age) {
//   let result = [];
//   for (let i = 0; i < emp.length; i++) {
//     if (emp[i].age === age) {
//       result.push(emp[i]);
//     }
//   }
//   return result;
// }
// console.log(filterByAge(employess, 23));

// function filterBydept(emp, dept) {
//   let result = [];
//   for (let i = 0; i < emp.length; i++) {
//     if (emp[i].dept === dept) {
//       result.push(emp[i]);
//     }
//   }
//   return result;
// }

// console.log(filterBydept(employess, "HR"));
// Higher Order Function and Callback- Call me back when you are Done!
function filterHigherOrderFunction(emp, fn) {
  let result = [];
  for (let i = 0; i < emp.length; i++) {
    if (fn(emp[i])) {
      result.push(emp[i]);
    }
  }
  return result;
}
console.log(
  filterHigherOrderFunction(employess, (emp) => {
    return emp.dept === "CS";
  })
);
console.log(
  filterHigherOrderFunction(employess, (emp) => {
    return emp.age === 28;
  })
);
