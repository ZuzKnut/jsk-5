// vytvoření elementu

const btn = document.createElement('button')


// co dělat s elementy
// el.textContent - vlastnost (string)
btn.textContent = 'tlačítko'
console.log(btn)

// přepsat jablko  na banán
// 1. vybrat li, které obsahuje text jablko
// 2. změnit jeho textcontent na banán

const jablko = document.querySelector('#fruits-list li:nth-child(2)')
jablko.textContent = 'banán'

// elementům můžeme vkládat dceřinné elementy
// parent.appendChild(childElement) - vloží childElement do parent na konec jeho obsahu

const body = document.querySelector('body')
const body1 = document.getElementsByTagName('body')[0]
document.body.appendChild(btn)
// body1.appendChild(btn)