import './css/styles.css'
import './css/home.css'
import './css/menu.css'
import './css/about.css'

import loadTab from './tabLoader.js'

// Loading styles all at once, instead of on demand,
// since I haven't reached the async programming section yet

const tabButtons = document.querySelector('.tab-buttons')

tabButtons.addEventListener('click', event => {
  event.preventDefault()

  const tabName = event.target.dataset.tab

  if (tabName) {
    loadTab(tabName)
  }
})

loadTab('home')
