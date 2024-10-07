const fruits = ['jablko', 'hruška', 'švestka'] // array of items

console.log(fruits.length) // 3

/*
array.forEach(callbackFunction)
*/

// fruits.forEach((cokoliv, poradi) => {
//   // 1. iterace ... item = 'jablko', index = 0, array = fruits
//   // 2. iterace ... item = 'hruška', index = 1, array = fruits
//   // 3. iterace ... item = 'švestka', index = 2, array = fruits
//   console.log((poradi + 1) + '.' +  cokoliv)
// })

fruits.forEach(fruit => {
  console.log(fruit)
})

// fruits.forEach(console.log)

const employees = [
  {
    first: 'Karel',
    last: 'Houska',
    salary: 1000
  },
  { first: 'Jožo', last: 'Horváth', salary: 2000 },
  { first: 'Jana', last: 'Halo', salary: 1500 }
]
// vykonzolovat součet salaries

let totalSalaries = 0
employees.forEach((employeeObject) => {
  // 1. iterace ... item = { first: 'Karel', last: 'Houska', salary: 1000 }
  totalSalaries += employeeObject.salary
})
console.log(totalSalaries)

