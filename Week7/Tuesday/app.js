var washoku = {
okonomiyaki: { 
  description: "an interesting take on a savory pancake with lots of toppings",
  // "type": null,
  category: "savory",
  region: "Hiroshima",
},
champuru: { 
  description: "a mixed dish featuring bittermelon and SPAM!",
  // "type": null,
  category: "savory",
  region: "Okinawa",
},
takoyaki: {
  description: "octopus dumplings in a round shape",
  // "type": null,
  category: "savory",
  region: "Osaka",
},
yudofu: { 
  description: "tofu served in a kelp-based soup",
  // "type": null,
  category: "savory",
  region: "Kyoto",
},
yatsuhashi: {
  description: "a sweet sugar and cinnamon triangle-shaped dumpling typically filled with red bean paste",
  // "type": null,
  category: "sweet",
  region: "Kyoto",
}
}

const express = require("express")
const app = express();
const port = 3000;
const session = require("express-session")
const bodyParser = require("body-parser")
const accountRouter = require('./routes/account')

// app.use(bodyParser.json())
app.use(express.static("public")); //folderName
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
  res.render("food", {washoku: washoku});
})

app.get("/food/category/", (req, res) => {
  res.render("category");
})

app.get("/food/category/:category", (req, res) => {
  res.render("category selection");
})

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