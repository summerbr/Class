var washoku =
{
  "item": "",
  "description: ",
  "type": "",
  "category": "",
  "region": "",
}



const express = require("express")
const app = express();
const port = 3000;
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.post("/", (req, res) => {
  console.log(req.body);
  // store req.body to movies data
  res.send("OK");
})

app.get("/", (req, res) => {
  res.send("Japanese YUM");
})

app.get("/food/", (req, res) => {
  res.send("All food");
})

app.get("/food/category/", (req, res) => {
  res.send("Category");
})

app.get("/food/category/:category", (req, res) => {
  res.send("Category selection");
})

app.get("/food/type/", (req, res) => {
  res.send("Type");
})

app.get("/food/type/:type", (req, res) => {
  res.send("Food Type");
})

app.get("/food/region", (req, res) => {
  res.send("Region");
})

app.get("/food/region/:region", (req, res) => {
  res.send(`${req.params.region} was typed`);
})

app.listen(port, () => {
  console.log(`Express app is running on port ${port}`);
});