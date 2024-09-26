const express = require('express');
const path = require('path');

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,'views')); 

let port = 8080;

app.get('/', (req, res)=> {
    res.render('script.ejs');
});

app.get('/dice', (req, res)=> {
    let dicevalue = Math.floor(Math.random() * 1000) + 1;
    res.render('dice.ejs', { dicevalue });
});

app.listen(port, ()=> {
    console.log("server is running at " + port);
});