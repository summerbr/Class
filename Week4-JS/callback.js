// TIMER
let counterH1 = document.getElementById('counterH1');
let counterText = document.getElementById('counterText');
let startBtn = document.getElementById('startBtn')

startBtn.addEventListener('click', () => {

  document.body.style.backgroundColor = 'green';
  let timerValue = counterText.value;
  
  let intervalId = setInterval(()=> {
    if (timerValue < 0) {
      window.clearInterval(intervalId)
      document.body.style.backgroundColor = 'red';
    } else {
      counterH1.innerHTML = timerValue
      timerValue--
    }
  },1000)
  
})
