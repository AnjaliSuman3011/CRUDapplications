const express = require("express");
const app = express();



app.get("/" ,(req,res)=>{
    res.send("hello from home");
})
app.listen(3000 ,()=>{
    console.log("server is listening at port 3000");
})