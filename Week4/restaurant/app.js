let menuItem = document.getElementById('menu');
let starterBtn = document.getElementById('starter');
let entreeBtn = document.getElementById('entree');
let dessertBtn = document.getElementById('dessert');

function displayDishes() {
  let item = dishes.map((dish) => {
    return `<li>
    <h3>${dish.title}</h3>
    <img src=" ${dish.imageURL}"< />
    <figcaption>${dish.description}</figcaption>
    </li>`
  });
  menuItem.innerHTML = item.join(' ')
}

function filterDish(course){
  let filteredDish = dishes.filter((dish) => {
    if (dish.course === course) {
      return dish.title
    }
  })
  let items = filteredDish.map((dish) => {
    return `<li>
      <h3>${dish.title}</h3>
      <img src=" ${dish.imageURL}"< />
      <figcaption>${dish.description}</figcaption>
      </li>`
  });
  menuItem.innerHTML = items.join(' ')
}