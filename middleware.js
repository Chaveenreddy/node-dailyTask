const http = require("http");
const express = require("express");
const app = express()
app.use((req, res, next) => {
    console.log("hellooo world ");
    next();
})
app.use((req,res,next)=>{
    console.log("hellooo to u ");
    
})
const server =http.createServer(app);
app.listen(3000)