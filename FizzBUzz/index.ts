for (let index = 1; index <= 100; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (index % 3 === 0) {
    console.log("Fizz");
  }
  else if (index % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(index);
  }
}

// —

for (let index = 1; index <= 100; index++) {
  let fooBar = '';

  if (index % 3 === 0) {
    fooBar += "Fizz";
  }

  if (index % 5 === 0) {
    fooBar += "Buzz";
  }

  //
  if (fooBar) {
    console.log(fooBar);
  }
  else {
    console.log(index);
  }
}
