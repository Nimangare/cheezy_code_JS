// setTomeOut()
// function fn() {
//   console.log("Hello");
// }

// fn();

// setTimeout(fn, 5000);

// setTimeout(function () {
//   console.log("Another Function");
// }, 2000);

// setInterval()
function fn() {
  if (count === 5) {
    clearInterval(timer);
  } else {
    console.log("Hello");
    count++;
  }
}
let timer = setInterval(fn, 1000);
let count = 0;
