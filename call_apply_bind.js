function stdudent(firstName, lastName, subject) {
  // let this={}
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;

  // return this;
}
let s1 = new stdudent("A", "B");
console.log(s1);

const getFullName = function (prefix, suffix) {
  console.log(`${prefix} ${this.firstName} ${this.lastName} ${suffix}`);
};
getFullName.call(s1, "HI", "How are you ?");
getFullName.apply(s1, ["HI", "How are you ?"]);

function employee(firstName, lastName, department) {
  // let this={}
  this.firstName = firstName;
  this.lastName = lastName;
  this.department = department;

  // return this;
}
let e1 = new employee("X", "Y", "Z");
getFullName.call(e1, "HI", "How are you ?");
getFullName.apply(e1, ["HI", "How are you ?"]);

let fn = getFullName.bind(s1);
console.log(fn);
fn("prefix", "suffix");
