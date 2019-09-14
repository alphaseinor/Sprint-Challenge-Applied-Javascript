/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

addCarousel = () => {
  carousel = document.createElement('div')
  left = document.createElement('div')
  img1 = document.createElement('img')
  img2 = document.createElement('img')
  img3 = document.createElement('img')
  img4 = document.createElement('img')
  right = document.createElement('div')

  carousel.appendChild(left)
  carousel.appendChild(img1)
  carousel.appendChild(img2)
  carousel.appendChild(img3)
  carousel.appendChild(img4)
  carousel.appendChild(right)

  img1.setAttribute('src', './assets/carousel/mountains.jpeg')
  img2.setAttribute('src', './assets/carousel/computer.jpeg')
  img3.setAttribute('src', './assets/carousel/trees.jpeg')
  img4.setAttribute('src', './assets/carousel/turntable.jpeg')

  img1.setAttribute('alt', 'mountains')
  img2.setAttribute('alt', 'computer')
  img3.setAttribute('alt', 'trees')
  img4.setAttribute('alt', 'turntable')

  img1.classList.add('show')

  carousel.classList.add('carousel')
  left.classList.add('left-button')
  right.classList.add('right-button')

  return carousel
}

carouselContainer = document.querySelector('.carousel-container')

carouselContainer.appendChild(addCarousel())
