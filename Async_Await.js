async function func1() {
  try {
    console.log("func 1");
    const response = await func2();
    console.log(response);
    func3();
  } catch (err) {
    console.log(err);
  }
}

function func2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("func 2");
      reject("Error");
    }, 1000);
  });
}

function func3() {
  console.log("func 3");
}

func1();
