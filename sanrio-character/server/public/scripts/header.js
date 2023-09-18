const header = document.querySelector('header')
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'Sanrio Character'

headerLeft.appendChild(headerTitle)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerRightButton = document.createElement('Explore')
headerRightButton.textContent = 'Explore'

headerRightButton.addEventListener('click', function handleClick(event) {
    window.location = '/'
})

headerRight.appendChild(headerRightButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)