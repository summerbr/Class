var washoku = {
Okonomiyaki: {
  japanese: "お好み焼き",
  description: "an interesting take on a savory pancake with lots of toppings",
  ingredient: flour,
  category: "savory",
  region: "Hiroshima",
},
Champuru: { 
  japanese: "ちゃまプル",
  description: "a mixed dish featuring bittermelon and SPAM!",
  ingredient: "spam",
  category: "savory",
  region: "Okinawa",
},
Takoyaki: {
  japanese: "たこやき",
  description: "octopus dumplings in a round shape",
  ingredient: "octopus",
  category: "savory",
  region: "Osaka",
},
Yudofu: { 
  japanese: "湯ドフ",
  description: "tofu served in a kelp-based soup",
  ingredient: "tofu",
  category: "savory",
  region: "Kyoto",
},
Yatsuhashi: {
  japanese: "八つ橋",
  description: "a sweet sugar and cinnamon triangle-shaped dumpling typically filled with red bean paste",
  ingredient: "red bean paste",
  category: "sweet",
  region: "Kyoto",
}}

const express = require("express")
const app = express();
const port = 3000;
const db = require("./database")
const session = require("express-session")
const bodyParser = require("body-parser")
const accountRouter = require('./routes/account')

// app.use(bodyParser.json())
app.use(express.static("public")); //folderName in root
app.use(bodyParser.urlencoded({ extended: false}));

app.use(session({
  secret: "pssssstttttttt....",
  resave: false,
  saveUninitialized: true
}));

app.set("view engine", "pug");

app.use("/account", accountRouter);

app.get("/", (req, res) => {
  res.render("index", {title:"Boo", message: "Send Help"});
})

app.get("/food/", (req, res) => {
  Object.keys(washoku).forEach(key => console.log(washoku[key]))
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

// app.get("/food/category/:category", (req, res) => {
//   console.log(req.params)
//   console.log(req.params.category)
//   res.render("category", {category: req.params.category});
// })

app.get("/food/region", (req, res) => {
  res.render("Region");
})

app.get("/food/region/:region", (req, res) => {
  res.send(`${req.params.region} was typed`);
})

app.get("/account", (req, res) => {
  res.render(`Welcome ${user}`);
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});