const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    res.render("index.ejs", { files: files });
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(`./files/${req.body.title}.txt`, req.body.details, (err) => {
    res.redirect("/");
  });
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit.ejs", {filename : req.params.filename});
});

app.post("/edit", (req, res) => {
    fs.rename(`./files/${req.body.oldname}`, `./files/${req.body.filename}.txt`, (err, files) => {
        res.redirect("/")
    });
});

const port = 8080;
app.listen(port, () => {
  console.log("port is listening");
});
