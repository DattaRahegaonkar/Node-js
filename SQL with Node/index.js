const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Datta",
  password: "Datta@4120201",
});

// it is manually

// data insert for single user
// let q = "insert into user (id, username, email, password) values (?, ?, ?, ?)";
// let user = ["123", "datta", "abc@gmail.com", "12345"];

// data insert for multiple user
// let q = "insert into user (id, username, email, password) values ?";
// let users = [
//   ["1233", "sham", "arbc@gmail.com", "123345"],
//   ["124", "sundar", "abfc@gmail.com", "125345"],
// ];

// data inserting In bulk format using faker package
let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
  };
let q = "insert into user (id, username, email, password) values ?";
let data = [];
for(let i=1; i<=10; i++){
    data.push(getRandomUser());
}


try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();
