
// Process.argv

// let args = process.argv;
// for(let i=2; i<args.length; i++){
//     console.log("hello to", args[i]);
// }

// console.log(process.argv);

// input => C:\Users\raheg\Desktop\Node js>node script.js datta rajat atharv ketan
// output
// hello to datta
// hello to rajat
// hello to atharv
// hello to ketan

//------------------------------------------------------------------------------------------------

// module.exports
// let info = require("./Fruits");

// console.log(info[2]);

//------------------------------------------------------------------------------------------------

// Creating Basic Server

// 1st API

// const http = require('http');

// const data = require("./math")

// http.createServer( (request,response)=> {
//     response.writeHead(200,{'content-Type':'application\json'})
//     response.write(JSON.stringify(data));
//     response.end();
// }).listen(4200);

//------------------------------------------------------------------------------------------------------

// Creating a file using command line

// console.log(process.argv);
// const fs = require('fs');
// const input = process.argv;

// console.log(input[2]);

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// } else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// } else {
//     console.log("invalid input")
// }

//---------------------------------------------------------------------------------------------------
// fs module
// CURD with files  create upadate read delete rename

// const fs = require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname,'files');
// const filepath = `${dirpath}/demo.txt`;

// fs.writeFileSync(filepath,"This is demo");   // creation of file

// fs.readFile(filepath,'utf8',(err,data)=>{    // reading of the file
//     // console.log(data);

// })

// fs.appendFile(filepath,' upadated the file using appendfile', (err)=>{   // upadation of file
//     if(!err) {
//         console.log("upadated")
//     }
// })

// fs.rename(filepath,`${dirpath}/NewDemo.txt`,(err)=>{      // Renameing the file
//     if(!err) {
//         console.log("name upadated");
//     }
// });

// fs.unlinkSync(`${dirpath}/NewDemo.txt`);      // deletion of the file


//---------------------------------------------------------------------------------------------------------