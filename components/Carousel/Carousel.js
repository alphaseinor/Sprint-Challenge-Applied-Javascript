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

images = [['./assets/carousel/mountains.jpeg','mountains'],
['./assets/carousel/computer.jpeg','computer'],
['./assets/carousel/trees.jpeg','trees'],
['./assets/carousel/turntable.jpeg','turntable']]

addCarousel = () => {
  carouselIndex = 0;
  carousel = document.createElement('div')
  left = document.createElement('div')
  img = document.createElement('img')
  //img2 = document.createElement('img')
  //img3 = document.createElement('img')
  //img4 = document.createElement('img')
  right = document.createElement('div')

  carousel.appendChild(left)
  carousel.appendChild(img)
  //carousel.appendChild(img2)
  //carousel.appendChild(img3)
  //carousel.appendChild(img4)
  carousel.appendChild(right)

  img.setAttribute('src', images[carouselIndex][0])
  //img2.setAttribute('src', './assets/carousel/computer.jpeg')
  //img3.setAttribute('src', './assets/carousel/trees.jpeg')
  //img4.setAttribute('src', './assets/carousel/turntable.jpeg')

  img.setAttribute('alt', images[carouselIndex][1])
  //img2.setAttribute('alt', 'computer')
  //img3.setAttribute('alt', 'trees')
  //img4.setAttribute('alt', 'turntable')

  img.classList.add('show')

  carousel.classList.add('carousel')
  left.classList.add('left-button')
  right.classList.add('right-button')

  left.addEventListener('click', x => {
    //go back one, or go to the top
    //console.log(images[0][0])
    //img.setAttribute('src', images[0][1])
    console.log('left')
    if(carouselIndex == 0){
      
      carouselIndex = images.length - 1
    }else{
      carouselIndex--;
    }
    img.setAttribute('src', images[carouselIndex][0])
    img.setAttribute('alt', images[carouselIndex][1])
  })
  right.addEventListener('click', x => {
    //console.log(images[1][0])
    //go forward one, or go to the beginning
    //img.setAttribute('src', images[0][0])
  })

  return carousel
}

carouselContainer = document.querySelector('.carousel-container')

carouselContainer.appendChild(addCarousel())
