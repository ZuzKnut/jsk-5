// callback functions

const sum = (num1, num2, cbFb) => {
  let result = num1 + num2
  cbFb(result)
}

sum(10, 3, console.log)


// podmínky

if (condition) {
  // do something
} else if (condition2) {
  // do something else
} else if (condition3) {
  // do whatever else
} else {
  // do final stuff
}

// ternární operátor ?:

let result = condition ? value1 : value2



// cykly