const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require('./Models/productsScehma');

app.use(express.json());



app.get("/" ,(req,res)=>{
    res.send("hello from home");
})

app.get("/products" ,async(req,res)=>{
    try{
  const product = await Product.find({});
  res.status(200).json(product);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:error.message});
    }
})


app.get("/products/id" ,async(req,res)=>{
    try{
        const id = req.params;
  const product = await Product.findById({id});
  res.status(200).json(product);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:error.message});
    }
})

app.put("/products/:id" ,async(req,res)=>{
    try{
        const {id} = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body);
  if(!product){
    return res.status(404).json({message:`cannot find any product with {id}`})
  }
  res.status(200).json(product);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:error.message});
    }
})

app.delete("/products/:id" ,async(req,res)=>{
    try{
        const {id} = req.params;
  const product = await Product.findByIdAndDelete(id);
  if(!product){
    return res.status(404).json({message:`cannot find any product with ${id}`});
  }
  res.status(200).json(product);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:error.message});
    }
})

 app.post("/products" , async(req,res)=>{
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