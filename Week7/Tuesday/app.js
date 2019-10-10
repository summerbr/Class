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
const bodyParser = require("body-parser")

// app.use(bodyParser.json())
app.use(express.static("public")); //folderName
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", {title:"Boo", message: "Send Help"});
})

app.get("/food/", (req, res) => {
  res.render("food", {washoku: washoku});
})

app.get("/food/category/", (req, res) => {
  res.render("Category");
})

app.get("/food/category/:category", (req, res) => {
  res.render("Category selection");
})

// app.get("/food/type/", (req, res) => {
//   res.send("Type");
// })

// app.get("/food/type/:type", (req, res) => {
//   res.send("Food Type");
// })

app.get("/food/region", (req, res) => {
  res.send("Region");
})

app.get("/food/region/:region", (req, res) => {
  res.send(`${req.params.region} was typed`);
})

// app.post("/", (req, res) => {
//   console.log(req.body);
//   // store req.body to movies data
//   res.send("OK");
// })

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});