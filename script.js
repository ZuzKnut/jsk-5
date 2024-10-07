/*

HTMLElement.classList.add('class-name') - přiřadí elementu třídu, pokud ji eště nemá
HTMLElement.classList.remove('class-name') - odebere elementu třídu, pokud ji má
HTMLElement.classList.toggle('class-name') - přepíná třídu


*/


const employees = [
  { first: 'Karel', last: 'Houska', position: 'driver', salary: 100 },
  { first: 'Jožo', last: 'Horváth', position: 'secretary', salary: 2000 },
  { first: 'Jana', last: 'Halo', position: 'manager', salary: 1500 }
]

// vytvořit tabulku
// full name | position | salary
// Karel Houska | driver | salary
// ...

const headers = ['full name', 'position', 'salary']

/*
- vytvořit table

- vytvořit thead
- vytvoříme tr
- pojedeme loop přes pole headers
  - vytvoříme th
  - dáme mu header jako textcontent
  - vložíme th do tr
- vložit tr do thead
- vložit thead do table

- vytvořit tbody
- pojedeme loop přes employees
  - vytvoříme tr
  - vytvoříme td
  - naplníme textcontentem emplyoee.first + ' ' + employee.last
  - vložíme do tr
  - podobně position
  - podobně salary
  - tr vložit do tbody
- vložit tbody do table
- vložit table do body
*/

/*
vytvoříme funkci
  - vytvoří element,
  - naplní ho textem
  - vloží ho do parent elementu
  - argumenty: tagName, text, parentEl
*/


/*
operátor porovnání

== porovnává hodnotu, ale ne datový typ (BAD PRACTICE)
=== porovnává hodnotu i datový typ (GOOD PRACTICE)

!= negace ==
!== negace ===


falsy values:
  - false,
  - ''
  - null
  - undefined
  - NaN
  - 0
*/

const renderEl = (tagName, textContent, parentEl, className = null) => {
  const el = document.createElement(tagName)
  el.textContent = textContent
  if (className) {
    el.classList.add(className)
  }
  parentEl.appendChild(el)
}

const table = document.createElement('table')
const thead = document.createElement('thead')
const headerTr = document.createElement('tr')
headers.forEach((header) => {
  // const th = document.createElement('th')
  // th.textContent = header
  // headerTr.appendChild(th)
  renderEl('th', header, headerTr, 'bg-pink')
})
thead.appendChild(headerTr)
table.appendChild(thead)

const tbody = document.createElement('tbody')
employees.forEach((employee) => {
  const tr = document.createElement('tr')

  // let td = document.createElement('td')
  // td.textContent = employee.first + ' ' + employee.last
  // tr.appendChild(td)
  renderEl('td', employee.first + ' ' + employee.last, tr)

  // td = document.createElement('td')
  // td.textContent = employee.position
  // tr.appendChild(td)

  renderEl('td', employee.position, tr)

  // td = document.createElement('td')
  // td.textContent = employee.salary
  // tr.appendChild(td)

  renderEl('td', employee.salary, tr)

  tbody.appendChild(tr)
})

table.appendChild(tbody)
document.body.appendChild(table)

const myCell = document.querySelector('td:last-child')
console.log(typeof myCell.textContent)

// jak udělat z number string ???
let num1 = 275234736
let str1 = '' + num1

// jak udělat ze stringu number ???
let str2 = '3456'
let num2 = + str2
