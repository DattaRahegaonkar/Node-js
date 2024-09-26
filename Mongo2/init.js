const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allchats = [
    {
        from: "Datta",
        to: "shripad",
        msg: "hello, how are you ?",
        created_at: new Date(),
    },
    {
        from: "Datta",
        to: "suysh",
        msg: "send me the note",
        created_at: new Date(),
    },
    {
        from: "shripad",
        to: "datta",
        msg: "I am fine, ehat abour you ?",
        created_at: new Date(),
    },
    {
        from: "suysh",
        to: "shripad",
        msg: "hey, are you coming to collage ?",
        created_at: new Date(),
    },
    {
        from: "suysh",
        to: "Datta",
        msg: "hello, how are you",
        created_at: new Date(),
    },
];

Chat.insertMany(allchats).then( (res) => {
    console.log(res);
})
