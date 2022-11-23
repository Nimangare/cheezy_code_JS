// olfer version
// // callback HEll
// function fn1(params, cb1, errcb1) {
//   cb1(cb2, errcb2){
//     cb2(cb3, errcb3){
//       console.log('')
//     }
//   }
// }
// fn1(12,)

let newPromise = new Promise((resolve, reject) => {
  // code to be exeutted
  let result = 1;
  if (result === 1) {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  } else {
    reject("Error");
  }
});

let newPromise2 = new Promise((resolve, reject) => {
  // code to be exeutted
  let result = 12;
  if (result === 12) {
    resolve("Success Promise 2");
  } else {
    reject("Error Promise 2");
  }
});

// Promise.all([newPromise, newPromise2])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race([newPromise, newPromise2])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
function getPromise(params) {
  return newPromise
    .then((response) => {
      console.log(response);
      return newPromise2;
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
getPromise(12);
