const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationship");
}

const Schema = mongoose.Schema;

const userschema = new Schema({
  username: String,
  email: String,
});

const userinfo = mongoose.model("userinfo", userschema);

const postschema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "userinfo",
  },
});

const post = mongoose.model("post", postschema);

// const adddata = async () => {

//   let user = await userinfo.find({ username: "datta" });
//   let users = user[0];
//   console.log(users);

//     let post2 = new post({
//       content: "bye",
//       likes: 8,
//     });

//     post2.user = users;
//     await post2.save();
// };

// adddata();

const getdata = async () => {
    let posts = await post.find({}).populate('user');
    console.log(posts);
}
getdata()