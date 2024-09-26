const express = require('express');
const path = require('path');

let floderpath = path.join(__dirname, 'public')

let app = express();
const port = 8080;
app.listen(port, ()=>{
    console.log("port is listening")
});

// app.get("path", function of sending response)

// app.get("/", (req, res)=> {
//     res.send("this is the home path");
// });

// app.get("/search", (req, res)=> {
//     res.send("this is the search path");
// });

// app.get("/help", (req, res)=> {
//     res.send("this is the help path");
// });

// app.get("*", (req, res)=> {
//     res.send("this path does not exit");
// });

// app.post("/", (req, res)=> {
//     res.send("this is the post path");
// });

//this is for all requests

// app.use((req, res)=>{
//     console.log("request recived");
//     res.send("<h1>This is the basic response</h1>");
// });

// for multiple routes 

// app.get("/:username", (req, res)=> {
//     let { username } = req.params;
//     let { q } = req.query;
//     let htmlstr = `<h1>This is the @${username} and the query is ${q}, name is ${req.query.name}</h1>`
//     res.send(htmlstr);
// });

// app.get("*", (req, res)=> {
//     res.send("this is the home path");
// });


// removeing extension

app.get("/home", (req, res)=> {
    res.sendFile(`${floderpath}/home.html`);
});