const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("account/account");
})

router.get("/login", function(req, res) {
  if (req.session && req.session.email) {
    res.redirect("/dashboard");
  }
  res.render("account/login")
})

router.get("/register", function(req, res) {
  res.render("account/register");
})

router.post("/login", function(req, res) {
  // console.log(req.session)
  if (req.session) {
    req.session.email = req.body.email
  }
  res.redirect("/account/dashboard");
})

router.post("/add", function(req, res) {
  if (req.session) {
      if (!req.session.tryFoods) req.session.tryFoods = [];
      console.log(req.session)
      console.log(req.body.food);
      req.session.tryFoods.push({ food: req.body.food })
  }
  res.redirect("/account/dashboard")
})

router.get("/dashboard", (req, res) => {
  console.log(req.session.tryFoods);
  var data = {};
  if (req.session && req.session.tryFoods) {
    data.tryFoods = req.session.tryFoods;
  } else {
    data.message = "Add some food!"
    console.log(req.session)
  }
  res.render("account/dashboard", data);
})

router.get("/logout", (req,res) => {
  req.session.destroy(() => {
    res.redirect("/account/login");
  })
})

module.exports = router;
