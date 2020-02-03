
let registerEmailInput = document.getElementById('registerEmail')
let registerPasswordInput = document.getElementById('registerPassword')
let registerBtn = document.getElementById('registerBtn')

let loginEmailInput = document.getElementById('loginEmail')
let loginPasswordInput = document.getElementById('loginPassword')
let loginBtn = document.getElementById('loginBtn')

let logoutBtn = document.getElementById('logoutBtn')
logoutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('onAuthStateChanged')
    console.log(user)
  } else {
    // User is signed out.
  }
});

loginBtn.addEventListener('click', () => {
  let email = loginEmailInput.value
  let password = loginPasswordInput.value

  firebase.auth().signInWithEmailAndPassword(email, 
  password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
})

registerBtn.addEventListener('click', () => {
  let email = registerEmailInput.value
  let password = registerPasswordInput.value

  firebase.auth().createUserWithEmailAndPassword(email, 
  password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  })
})
