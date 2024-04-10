const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

app.use(cors());

const ProductRoute = require('./Routes/ProductRoute');
app.use(express.json());

app.use("/api/products" ,ProductRoute);


app.get('/api' ,(req,res)=>{
    res.send("hello from home");
})



    mongoose
    .connect('mongodb+srv://Anjali:9905949991@cluster0.yp4wprj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(
        ()=>{
            console.log("DB connected");
        })
        .catch((error)=>{
console.log(error);
        })
app.listen(3000 ,()=>{
    console.log("server is listening at port 3000");
})