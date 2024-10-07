const fruits = ['banán', 'kiwi', 'pomeranč', 'hruška']

// vytvořte seznam ovoce podle pole fruits a vložte ho do DOM

/*
  - vytvořit ul
  - budeme procházet pole fruits
    - vytvořit li
    - naplnit jeho textkontent názvem ovoce
    - musíme ho vložit do ul
  - vložit ul do body
*/

const ul = document.createElement('ul')
fruits.forEach((fruit) => {
  const li = document.createElement('li')
  li.textContent = fruit
  ul.appendChild(li)
})
document.body.appendChild(ul)
