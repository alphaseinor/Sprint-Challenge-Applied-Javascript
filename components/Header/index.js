// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

Header = () => {
  //elements
  header = document.createElement('div')
  headerDate = document.createElement('span')
  headerTitle = document.createElement('h1')
  headerTemp = document.createElement('span')

  //structure
  header.appendChild(headerDate)
  header.appendChild(headerTitle)
  header.appendChild(headerTemp)

  //content
  headerDate.textContent = 'SMARCH 28, 2019'
  headerTitle.textContent = 'Lambda Times'
  headerTemp.textContent = '98°'

  //style
  header.classList.add('header')
  headerDate.classList.add('date')
  headerTemp.classList.add('temp')

  return header
}

headerSelector = document.querySelector('.header-container')
headerSelector.appendChild(Header())