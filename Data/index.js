const express = require("express");
const ExpressError = require("./ExpressError");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const methodoverride = require("method-override");


app.get("/admin", (req, res) => {
  throw new ExpressError(403, "acess is forbidden");    
});

app.use((err, req, res, next) => {
  let { status = 500, message = "some error" } = err;
  res.status(status).send(message);
});
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "Datta",
//   password: "Datta@4120201",
// });

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views")); // to access the views folder

// app.use(express.urlencoded({ extended: true })); // to parse the data
// app.use(methodoverride("_method"));

// let getRandomUser = () => {
//   return [faker.string.uuid()];
// };

// app.get("/data", (req, res) => {
//   let q = "select count(*) as count from user";
//   try {
//     connection.query(q, (err, counts) => {
//       if (err) throw err;
//       if (counts[0].count === 0) {
//         res.render("empty.ejs");
//       } else {
//         let q = "select id, username, email from user";
//         try {
//           connection.query(q, (err, users) => {
//             if (err) throw err;
//             res.render("data.ejs", { users });
//           });
//         } catch (err) {
//           console.log(err);
//         }
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.get("/data/info", (req, res) => {
//   res.render("index.ejs");
// });

// app.post("/data", (req, res) => {
//   let { username, email, password } = req.body;
//   let id = getRandomUser()[0];
//   let q = `insert into user (id, username, email, password) values ('${id}', '${username}', '${email}', '${password}')`;
//   try {
//     connection.query(q, (err, users) => {
//       if (err) throw err;
//       res.redirect("/data");
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.get("/data/:id/edit", (req, res) => {
//   let { id } = req.params;
//   let q = `select * from user where id = '${id}'`;
//   try {
//     connection.query(q, (err, users) => {
//       if (err) throw err;
//       res.render("edit.ejs", { users });
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.patch("/data/:id", (req, res) => {
//   let { id } = req.params;
//   let { username, password } = req.body;
//   let q = `select * from user where id = '${id}'`;
//   try {
//     connection.query(q, (err, users) => {
//       if (password != users[0].password) {
//         res.send("Enter Correct Password");
//       } else {
//         let q = `update user set username = '${username}' where id = '${id}'`;
//         try {
//           connection.query(q, (err, users) => {
//             if (err) throw err;
//             res.redirect("/data");
//           });
//         } catch (err) {
//           console.log(err);
//         }
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.delete("/data/:id/delete", (req, res)=>{
//   let {id} = req.params;
//   let q = `delete from user where id = '${id}'`;
//   try {
//     connection.query(q, (err, users)=>{
//       res.redirect("/data");
//     })
//   } catch (err) {
//     console.log(err);
//   }
// })

const port = 9090;
app.listen(port, () => {
  console.log("port is listening");
});
