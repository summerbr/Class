
const postBtn = document.querySelector('#post')
let list = document.getElementById('movies')
const url = 'https://hungry-diagram.glitch.me/movies'
let request = new XMLHttpRequest()

postBtn.addEventListener('click', () => {
  request.open('POST', url)
  request.setRequestHeader('Content-Type', 'application/json');

  let body = {title: 'Cabin in the Woods', rating: 'R'}
  request.send(JSON.stringify(body))
})

request.open('GET', url)
request.onload = function() {
  let movies = JSON.parse(this.responseText)
  console.log(movies)
  let movieList = movies.map((movie) => {
    return `<li>
            <h3>${movie.title}</h3>
            <h4>${movie.rating}</h4>
            </li>`
  })
  list.innerHTML = movieList.join(' ');
}
request.send()