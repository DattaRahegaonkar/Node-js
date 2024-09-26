const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

  // Test Database
// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/test");
// }

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number,
// });

// const User = mongoose.model("User", userSchema);


// Library Database
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Library");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model("Book", bookSchema);

Book.insertMany([
  {title: "Math XII", author: "RD Sharma", price: 1200},
  {title: "Physics XII", author: "HC verma", price: 1500},
  {title: "Chemistry XII", author: "NCERT", price: 1000},
]).then( (res) => {
  console.log(res);
});

// 

// Finding the data
// User.find( {age: {$gt: 20}}).then((data) => {
//   console.log(data);
// });

// to delete the data and get deleted data
// User.findByIdAndDelete("66a48456a0f26e494b171495").then( (res) => {
//   console.log(res);
// })

// User.findOneAndDelete({name: "eve"}).then( (res) => {
//   console.log(res);
// })

// To find And Update the data and get as a object
// User.findOneAndUpdate({name: "devil"}, {age: 90}, {new : true})
//     .then( (res) => {
//       console.log(res);
//     })

// User.findByIdAndUpdate("66a48456a0f26e494b171495", {age: 22}, {new: true})
//     .then( (res)=> {
//       console.log(res);
//     })

// Inderting Multiple data
// User.insertMany([
//   { name: "Adam", email: "adam@gmail.com", age: 20 },
//   { name: "eve", email: "eve@gmail.com", age: 19 },
//   { name: "devil", email: "devil@gmail.com", age: 21 },
// ]).then((data) => {
//   console.log(data);
// });


// Inderting one data
// const user1 = new User({
//   name: "Datta",
//   email: "datta@gmail.com",
//   age: 21,
// });
// user1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
