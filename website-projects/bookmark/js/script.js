// 1. Menu:
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

// Hamburger button listener
btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}

// 2. Features section:

const tabs = document.querySelectorAll('.tab')
// the line above creates something called node list which is similar to ana array
// now when we want to get elemenst from that list we use notation like with arrays
const panels = document.querySelectorAll('.panel')

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))


function onTabClick(e) {
  // Deactivate all tabs (+borders)
  tabs.forEach((tab) => {
    console.log(tab.children[0],'accesing children of a tab becasue on them is a class we want to remove')
    tab.children[0].classList.remove(
      'border-softRed' 
    )
  })

  // Hide all panels
  panels.forEach((panel) => panel.classList.add('hidden'))

  // Activate a new tab and panel based on the data-target attribute of a tab, and 
  // corrensponding class of a panel
  console.log('e.target', e.target)
  // why this is pointing to the children of a tab? not to the tab itself?
  e.target.classList.add('border-softRed', 'border-b-4')
  const classString = e.target.getAttribute('data-target')
  console.log('classString', classString)
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')
}
