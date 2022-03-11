
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

import axios from "axios";

const Card = (article) => {
  // Making DOM Variables
  const cardHolder = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv =document.createElement('div');
  const imgDiv = document.createElement('div');
  const photo = document.createElement('img');
  const spanStuff = document.createElement('span');

  // Modding Variables
  cardHolder.classList.add('card');

  headlineDiv.classList.add('headline');
  headlineDiv.textContent = article.headline;

  authorDiv.classList.add('author');

  imgDiv.classList.add('img-container');

  photo.src = article.authorPhoto;

  spanStuff. textContent = `By ${article.authorName}`;

  // Giving Divs Kids
  cardHolder.appendChild(headlineDiv);
  cardHolder.appendChild(authorDiv);

  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(spanStuff);

  imgDiv.appendChild(photo); 

  // return component
  return cardHolder;
}

 // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

const cardAppender = (selector) => {

  let articleBag

  axios.get('http://localhost:5001/api/articles')
  .then(object => {
    const dataBag = object.data.articles
    const parent3 =document.querySelector(selector)

    dataBag.bootstrap.forEach(item => parent3.appendChild(Card(item)))
    dataBag.javascript.forEach(item => parent3.appendChild(Card(item)))
    dataBag.jquery.forEach(item => parent3.appendChild(Card(item)))
    dataBag.node.forEach(item => parent3.appendChild(Card(item)))
    dataBag.technology.forEach(item => parent3.appendChild(Card(item)))
    console.log(dataBag)
  })
  .catch(err => console.log('error!', err));
  
  
}

export { Card, cardAppender }
