import homeTabElement from './pages/home.js'
import menuTabElement from './pages/menu.js'
import aboutTabElement from './pages/about.js'

const container = document.querySelector('#content')

const tabs = {
  home: homeTabElement,
  menu: menuTabElement,
  about: aboutTabElement,
}

export default function loadTab(tabName) {
  const tab = tabs[tabName]
  if (!tab) {
    throw new Error(`Tab ${tabName} doesn't exist`)
  }
  container.replaceChildren()
  container.appendChild(tab)
}
