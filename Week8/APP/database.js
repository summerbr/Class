const pgp = require("./node_modules/pg-promise")();
const db = pgp("postgres://localhost:5432/washoku");

function checkForUser(email) {
  return db.oneorNone(
    "SELECT email, password, id from users WHERE email = $1",
    [email]
  );
};

function createUser(email, password){
  return db.none("INSERT INTO users (email, password) VALUES ($1, $2)", [
    email,
    password
  ]);
};

module.exports = {
  checkForUser: checkForUser,
  createUser: createUser,
};