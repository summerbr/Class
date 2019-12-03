// let postsUL = document.getElementById('postsUL');
// const url = "https://jsonplaceholder.typicode.com/photos"

// // create an object of XMLRequest
// let request = new XMLHttpRequest()
// request.addEventListener('load', function() {
//   console.log(this.responseText)

//   let posts = JSON.parse(this.responseText)

//   let postItems = posts.map((post) => {
//     return `<li>
//     <img src=" ${post.thumbnailUrl} " />
//     <figcaption>${post.title}</figcaption>
//     </li>`
//   })

//   postsUL.innerHTML = postItems.join(' ')
// })

// request.open('GET', url)
// request.send()

let photosUL = document.getElementById('postsUL');
const url = "https://jsonplaceholder.typicode.com/photos"

function getPhotos(completed) {
  let photos = []

  let request = new XMLHttpRequest()
  request.onload = function() {
    photos = JSON.parse(this.responseText)
    completed(photos)
  }
  request.open('GET', url)
  request.send()

}
//function being passed in; must match the variable in original
getPhotos((photos)=> {
  console.log(photos)
  updateUI(photos)
})

function updateUI(photos) {
    let photoItems = photos.map((photo) => {
    return `<li>
    <img src=" ${photo.thumbnailUrl} " />
    <figcaption>${photo.title}</figcaption>
    </li>`
  })
    photosUL.innerHTML = photoItems.join(' ')
}