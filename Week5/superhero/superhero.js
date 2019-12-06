let key = "a9e9323c"
let list = document.getElementById('list')
let detailPane = document.getElementById('detail')

function getMovies(done, search) {
  let url = `http://www.omdbapi.com/?s=${search}&apikey=${key}`
  let request = new XMLHttpRequest()

  request.onload = function() {
    let movies = JSON.parse(this.responseText)
    done(movies)
    console.log(movies)
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
    console.log(details)
    detailPane.innerHTML = 
    ` <h1>${details.Title}</h1>
      <h4>Rating: ${details.Rated}</h4>
      <h4>Release Date: ${details.Released}</h4>
      <h4>Awards: ${details.Awards}</h4>
      <p>Plot Summary: ${details.Plot}</p>
      <img src=" ${details.Poster} " />
    `
  }
}

function displayMovies(movies) {
  let movieList = movies.Search.map((movie) => {
    return `<li>
    <img src=" ${movie.Poster} " />
    <h4> ${movie.Title} </h4>
    <button id= ${movie.imdbID} onclick= "showDetails(event)" >Show Details</button>
    </li>`
  })
  list.innerHTML = movieList.join(' ');
}

getMovies((movies) => {
  displayMovies(movies)
}, 'avengers')

//filter out if type != movie