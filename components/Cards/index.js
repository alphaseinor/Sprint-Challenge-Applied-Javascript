// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
createCard = (arr) =>{
  //elements
  card = document.createElement('div')
  cardHeadline = document.createElement('div')
  cardAuthor = document.createElement('div')
  cardAuthorImgContainer = document.createElement('div')
  cardAuthorImg = document.createElement('img')
  cardAuthorName = document.createElement('span')

  //structure
  cardAuthorImgContainer.appendChild(cardAuthorImg)
  cardAuthor.appendChild(cardAuthorImgContainer)
  cardAuthor.appendChild(cardAuthorName)
  card.appendChild(cardHeadline)
  card.appendChild(cardAuthor)
  
  //set content
  cardAuthorImg.setAttribute('src', arr.authorPhoto)
  cardAuthorImg.setAttribute('alt', arr.authorName)
  cardAuthorName.textContent = `By ${arr.authorName}`
  cardHeadline.textContent = arr.headline

  //set style
  card.classList.add('card')
  cardHeadline.classList.add('headline')
  cardAuthor.classList.add('author')
  cardAuthorImgContainer.classList.add('img-container')

  return card
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(arr =>{
    //console.log(arr.data.articles)
    cardsContainer = document.querySelector('.cards-container')
    
    articleKeys = Object.keys(arr.data.articles)
    
    articleKeys.forEach(element => {
      //console.log(arr.data.articles[element])
      arr.data.articles[element].forEach(x => {
        cardsContainer.appendChild(createCard(x))
      })
    });

    // arr.data.articles.forEach(element => {
    //   console.log(element)
    // })
  })
  .catch(err => {
    console.log(err)
  })