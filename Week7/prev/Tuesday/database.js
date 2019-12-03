const pgp = require("pg-promise")();
const db = pgp("postgres://localhost:5432/movies.pgpromise_prework);

function getMovies(){
  return db.any("SELECT * FROM movies"); //return a promise
}

function createUser(email, password){
  return db.none("INSERT INTO users (email, password) VALUES ($1, $2)", [
    email,
    password
  ]);
}

// module.exports = {
//   getMovies: getMovies
// }