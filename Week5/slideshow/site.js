
let newsContainer = document.getElementById("news-container")

news.articles.forEach(function(article){

  let newsItem = `<img class="article-image" src='${article.urlToImage}'></img> <div>${article.title}</div>
  <div>${article.description}</div>
  `

  newsContainer.innerHTML += newsItem

})














/*
let images = ["image1.png","image2.png","image3.png"]
let index = 0

let slideShowImage = document.querySelector("#slideShowImage")

setInterval(function(){

  let currentImage = images[index]
  slideShowImage.src = currentImage
  index++

  if(index >= images.length) {
    index = 0
  }

},2000) */
