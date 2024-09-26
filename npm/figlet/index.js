
let figlet = require("figlet");

let data = figlet(" Bachha", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

  module.exports = data ;