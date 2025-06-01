const express = require("express");
const app = express();
const port = 8000;

const path = require("path");

app.set("views", path.join(__dirname, "views")); // Set the views folder.
app.set("view engine", "pug"); // Set the view engine.

app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/collections", (req, res) => {
  res.render("pages/collections");
});

app.get("/details", (req, res) => {
  res.render("pages/details");
});

app.listen(8000, () => {
  console.log(`Listening on port ${port}`);
});
