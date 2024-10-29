import './css/styles.css'
import './css/home.css'
import './css/menu.css'
import './css/about.css'

import homePageElement from './pages/home.js'
import menuPageElement from './pages/menu.js'
import aboutPageElement from './pages/about.js'
// Loading styles and pages all at once, instead of on demand,
// since I haven't reached the async programming section yet

const contentDiv = document.querySelector('#content')
const tabButtons = document.querySelector('.tab-buttons')

function loadContent(contentElement) {
  contentDiv.replaceChildren()
  contentDiv.appendChild(contentElement)
}

tabButtons.addEventListener('click', event => {
  // Prevent link behaviour
  event.preventDefault()

  const tab = event.target.dataset.tab
  // Clicked tab button
  if (tab) {
    switch (tab) {
      case 'home':
        loadContent(homePageElement)
        break
      case 'menu':
        loadContent(menuPageElement)
        break
      case 'about':
        loadContent(aboutPageElement)
        break
    }
  }
})

// Initially, load home page
loadContent(homePageElement)
