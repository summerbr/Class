const express = require("express");
const app = express();
const port = 3000; 
const db = require("./database");
const session = require("express-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
// const accountRouter = require('./routes/account');

app.use(bodyParser.json())
app.use(express.static("public")); //folderName in root
app.use(bodyParser.urlencoded({ extended: false}));

app.set("view engine", "pug");

app.use(session({
  secret: "pssssstttttttt....",
  resave: false,
  saveUninitialized: true
}));

// app.use("/account", accountRouter);

app.get("/", (req, res) => {
  res.render("index", {title:"Boo", message: "Send Help"});
})

app.get("/food/", (req, res) => {
  res.render("food", {washoku: washoku});
})

app.get("/food/:food", (req, res) => {
  console.log(req.params)
  console.log(req.params.food)
  res.render("foodname", {food: req.params.food});
})

app.get("/food/category/", (req, res) => {
  res.render("category");
})

app.get("/food/region", (req, res) => {
  res.render("Region");
})

app.get("/food/region/:region", (req, res) => {
  res.send(`${req.params.region} was typed`);
})

// app.get("/account", (req, res) => {
//   res.render(`Welcome ${email}`);
// })

app.get("/login", (req, res)=> {
  let data = {};
  if (req.query.registeredSuccessfully) data.registeredSuccessfully = true;
  if (req.query.loggedOutSuccessfully) data.loggedOutSuccessfully = true;
  res.render("account/login", data);
});
 
// app.get("/login", function(req, res) {
//   if (req.session && req.session.email) {
//     res.redirect("/dashboard");
//   }
//   res.render("account/login")
// })

app.post("/login", async (req, res)=> {
  try {
  let email = req.body.email,
    password = req.body.password
    //check if user exists in db
    let dbUser = await db.checkForUser(email);
    console.log(dbUser)
    if (!dbUser.email) throw new Error("Login failed");
    //check the password matches
    bcrypt.compare(req.body.password, dbUser.password, (err, same) => {
      if (err) throw err;
      if (!same) throw new Error("Incorrect password");
      //login & redirect (save user_id to session, go to dashboard)
      req.session.user_id = dbUser.id;
      res.redirect("/dashboard");
    });
  } catch (e) {
    res.send(e);
  }
});

app.get("/logout", (req, res) => {
  let data = {};
  req.session.destroy();
  res.redirect("/login?loggedOutSuccessfully=true");
});

app.get("/register", (req, res) => {
  res.render("account/register");
})

app.post("/registerUser", async (req, res) => {
  try {
    let user = await db.checkForUser(req.body.email);
    console.log(user)
    if (user) {
      throw new Error("Issue with email or password");
    }
    bcrypt.hash(req.body.password, 5, (err, encrypted)=> {
      if (err) throw err;
      db.createUser(req.body.email, encrypted);
      res.redirect("/login?registeredSuccessfully=true");
    });
  } catch (e) {
    res.send(e);
  }
});

app.post("/add", function(req, res) {
  if (req.session) {
      if (!req.session.tryFoods) req.session.tryFoods = [];
      console.log(req.session)
      console.log(req.body.food);
      req.session.tryFoods.push({ food: req.body.food })
  }
  res.redirect("/account/dashboard")
})

app.get("/dashboard", (req, res) => {
  // console.log(req.session.tryFoods);
  var data = {};
  if (req.session && req.session.tryFoods) {
    data.tryFoods = req.session.tryFoods;
  } else {
    data.message = "Add some food!"
    console.log(req.session)
  }
  res.render("account/dashboard", data);
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});