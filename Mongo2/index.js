const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main().catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// All Chats are here
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("newchat.ejs");
});

function asyncwrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(err => next(err));
  }
}

// Creating the New Chat
app.post("/chats", asyncwrap( async (req, res, next) => {
    let { from, msg, to } = req.body;
    let newchat = new Chat({ 
      from: from,
      msg: msg,
      to: to,
      created_at: new Date(),
    });

    await newchat.save();
    res.redirect("/chats");
}));

// show msg // due to error hacdling check
app.get("/chats/:id", asyncwrap( async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(404, "chat not found"));
    }
    res.render("edit.ejs", { chat });
}));

app.get("/chats/:id/edit", asyncwrap(async (req, res, next) => {
    let chat = await Chat.find({ _id: `${req.params.id}` });
    res.render("edit.ejs", { chat });
}));

// Upadting the Msg
app.patch("/chats/:id", (req, res) => {
  Chat.updateOne(
    { _id: `${req.params.id}` },
    { msg: `${req.body.Newmsg}` }
  ).catch((err) => console.log(err));
  res.redirect("/chats");
});

// Deleteing the msg
app.delete("/chats/:id", (req, res) => {
  Chat.deleteOne({ _id: `${req.params.id}` }).catch((err) => console.log(err));
  res.redirect("/chats");
});

//mongoose error
const validationErrorHandler = (err) => {
  console.log("this the validation error");
  console.dir(err);
  return err;
}

app.use((err, req, res, next) => {
  console.log(err.name);  
  if(err.name === "ValidationError"){
    err = validationErrorHandler(err);
  } 
  if(err.name === "CastError"){
    console.log("this is the cast error");
  }
  next(err);
})

// error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "some error occur" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("server is listening");
});
