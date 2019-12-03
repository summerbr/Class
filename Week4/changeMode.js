let parent = document.getElementById('container');

let darkModeButton = document.createElement('button');
darkModeButton.innerHTML = 'Enable Dark Mode';
darkModeButton.style.background = 'black';
darkModeButton.style.color = 'white';
parent.appendChild(darkModeButton);

let lightModeButton = document.createElement('button');
lightModeButton.innerHTML = 'Enable Light Mode';
parent.appendChild(lightModeButton);

darkModeButton.addEventListener('click', function() {
  document.body.style.background = 'black'
})

lightModeButton.addEventListener('click', function() {
  document.body.style.background = 'white'
})