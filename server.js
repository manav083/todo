const http = require('http');
const app  = require("./index");

http.createServer(app).listen(3001, () =>{console.log("hello! backend. port = 3001")});
