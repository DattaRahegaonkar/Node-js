// const express = require('express');
// const path = require('path');

// let app = express();

// let floderpath = path.join(__dirname, "Datta");
// console.log(floderpath);

// app.use(express.static(floderpath));

// let port = 3000;
// app.listen(port, ()=>{
//     console.log("srever is running at" + port);
// });



const express = require('express');
const path = require('path');

let app = express();

let floderpath = path.join(__dirname, "public");
console.log(floderpath);

app.use(express.static(floderpath));

let port = 4200;
app.listen(port, ()=>{
    console.log("srever is running at" + port);
});

