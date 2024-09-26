
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationship");
}

const Schema = mongoose.Schema;

const userschema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const user = mongoose.model("user", userschema);

const adduser = async () => {
  let user1 = new user({
    username: "datta",
    addresses:[
      {
        location: "sinhgad collage",
        city: "pune",
      },
    ],
  });

  await user1.save().then((res)=>{
    console.log(res);
  })
};

adduser();

