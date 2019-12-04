let key = '3dadcf02f06ff162f8ddef0e76c12c99'
let searchForm = document.getElementById('citySearch')
let searchBtn = document.getElementById('search')
let display = document.getElementById('main')

async function getWeather(zip) {
  let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${key}&units=imperial`
  let response = await fetch(url)
  response = await response.json()
  console.log(response)
  let data = response.main
  let city = response.name
  displayData(data, zip, city)
}

function displayData(data, zip, city) {
  display.innerHTML = `
  <h1>Current Weather for ${city}</h1>
  <h3>Temp: ${data.temp}</h3>
  <h3>Pressure: ${data.pressure}</h3>
  <h3>Humidity: ${data.humidity}</h3>
  <h3>Max Temp: ${data.temp_max}</h3>
  <h3>Min Temp: ${data.temp_min}</h3>`
}

searchBtn.addEventListener('click', (e) => {
  let zip = searchForm.value
  getWeather(zip)
  e.preventDefault()
})

function userWeather() {
  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${key}&units=imperial`

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}