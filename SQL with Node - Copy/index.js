const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Datta",
  password: "Datta@4120201",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Home Route
app.get("/", (req, res) => {
  let q = "select count(*) from user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("index.ejs", { count });
    });
  } catch (err) {
    res.send("somthing in DB");
  }
});

// Show Route
app.get("/users", (req, res) => {
  let q = "select * from user";
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("show.ejs", { users });
    });
  } catch (err) {
    res.send("somthing in DB");
  }
});

app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.render("edit.ejs", { result });
    });
  } catch (err) {
    res.send("somthing in DB");
  }
});

app.patch("/users/:id", (req, res) => {
  let { id } = req.params;
  let { username, password } = req.body;
  console.log(password);
  let q = `select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      if (password != result[0].password) {
        res.send("wrong password");
      } else {
        let q2 = `update user set username='${username}' where id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.redirect("/users");
        });
      }
    });
  } catch (err) {
    res.send("somthing in DB");
  }
});

app.listen("3000", () => {
  console.log("Port is listening");
});
