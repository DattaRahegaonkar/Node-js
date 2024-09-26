const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
let port = 8080;

app.use(express.urlencoded({ extended: true })); // to parse the data
app.use(methodOverride("_method"));

app.set("view engine", "ejs"); // to set up ejs
app.set("views", path.join(__dirname, "views")); // to access the views folder
app.use(express.static(path.join(__dirname, "public"))); // to access the public folder

let posts = [
  {
    id: uuidv4(),
    username: "Datta Rahegaonkar",
    content: "I am creating a backend server",
  },
  {
    id: uuidv4(),
    username: "shripad pawar",
    content: "I am doing dsa",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("form.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("detail.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let NewContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = NewContent;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log("server is listening");
});
