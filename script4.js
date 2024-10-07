// DOM MANIPULATION

// Document Object Model

console.log(document)

// výběr elementu z HTML (DOMu)
// výběr jednoho elementu
  // - document.getElementById('idString') - vrací element nebo null
  // - document.querySelector('css-selector') - vrací první element, který odpovídá selektoru, nebo null

// výběr skupiny elementů
  // - document.getElementsByTagName('tagname') - vrací HTMLCollection elementů, které mají daný tagname
      // HTMLCollection je ArrayLike struktura - nemůžeme na ní volat forEach (!)
  // - document.getElementsByClassName('my-class') -vrací HTMLCollection elementů, které mají danou třídu
  // - document.querySelectorAll('css-selector') - vrací NodeList elementů, které vyhovují selektoru

const ul = document.getElementById('fruits-list')
console.log(ul)

const ul1 = document.querySelector('ul')
console.log(ul1)

const li = document.querySelector('ul:not(nav ul) li:nth-child(2)')
// co s těmi elementy můžeme dělat
console.log(li)

const uls = document.getElementsByTagName('ul')
console.log(uls)

const lis = document.getElementsByTagName('li')
console.log(lis[4])
const lisArray = Array.from(lis)

const lis2 = document.querySelectorAll('#fruits-list li')
console.log(lis2)
