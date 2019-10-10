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

router.post("/login", function(req, res) {
  console.log(req.session)
  if (req.session) {
    req.session.email = req.body.email
  }
  res.redirect("/account/dashboard");
})

router.get("/dashboard", (req, res) => {
  res.render("account/dashboard");
})

router.get("/logout", (req,res) => {
  req.session.destroy(() => {
    res.redirect("/account/login");
  })
})

module.exports = router;
