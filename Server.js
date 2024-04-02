const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require('./Models/productsScehma');

app.use(express.json());



app.get("/" ,(req,res)=>{
    res.send("hello from home");
})

 app.post("/product" , async(req,res)=>{
   try{
  const product = await Product.create(req.body)
  res.status(200).json(product);
   }
    catch(error){
        console.log(error.message)
        res.status(500)

    }
    
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