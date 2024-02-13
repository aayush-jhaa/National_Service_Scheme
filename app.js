const path = require("path");

const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/media", function (req, res) {
  res.render("media");
});

app.get("/about_us", function (req, res) {
  res.render("about_us");
});

app.get("/clothes_distribution", function (req, res) {
  res.render("clothes_distribution");
});

app.get("/blood_donation", function (req, res) {
  res.render("blood_donation");
});

app.listen(3000);
