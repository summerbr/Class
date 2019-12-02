let key = "a9e9323c"
let list = document.getElementById('list')
let detailPane = document.getElementById('detail')

function getMovies(done, search) {
  let url = `http://www.omdbapi.com/?s=${search}&apikey=${key}`
  let movies = []
  let request = new XMLHttpRequest()

  request.onload = function() {
    let movies = JSON.parse(this.responseText)
    done(movies)
  }
  request.open('GET', url)
  request.send() 
}

function showDetails(e) {
  let id = e.target.getAttribute('id')
  let url = `http://www.omdbapi.com/?i=${id}&apikey=${key}`
  let request = new XMLHttpRequest()
  
  request.open('GET', url)
  request.send() 

  request.onload = function() {
    let details = JSON.parse(this.responseText)
    // console.log(details)
    detailPane.innerHTML = 
    ` <h2>${details.Title}</h2>
      <h4>Rating: ${details.Rated}</h4>
      <h4>Release Date: ${details.Released}</h4>
      <h5>Awards: ${details.Awards}</h5>
      <p>Plot Summary: ${details.Plot}</p>
    `
  }
}

function displayMovies(movies) {
  let movieList = movies.Search.map((movie) => {
    return `<li>
    <img src=" ${movie.Poster} " />
    <h1> ${movie.Title} </h1>
    <button id= ${movie.imdbID} onclick= "showDetails(event)" >Show Details</button>
    </li>`
  })
  list.innerHTML = movieList.join(' ');
}

getMovies((movies) => {
  displayMovies(movies)
}, 'deadpool')