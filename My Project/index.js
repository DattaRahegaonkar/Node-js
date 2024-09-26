// import figlet from "figlet";
// import chalk from 'chalk';

// import { generate } from "random-words";

// figlet("Datta", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });

// console.log(chalk.blue('Hello world!'));

// console.log(generate());

import express from "express";
import ExpressError from "ExpressError";
const app = express();

app.get("/admin", (err, req, res, next) => {
  throw new ExpressError(403, "access is forbidden");
});

app.use((err, req, res, next) => {
  let { status = 500, msg = "some error occur" } = err;
  res.status(status).send(msg);
});

app.listen(5000, () => {
  console.log("server is running");
});
