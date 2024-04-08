const Product = require('../Models/productsScehma');

//getting all products
const getproducts = async(req,res)=>{
    try{
  const product = await Product.find({});
  res.status(200).json(product);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:error.message});
    }
}

//getting a single product

const getproduct = async(req,res)=>{
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
}

//updating a product 

const putproduct = async(req,res)=>{
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
}

//deleting a prduct 

const deleteproduct = async(req,res)=>{
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
}

//creating a product

const createproduct = async(req,res)=>{
    try{
   const product = await Product.create(req.body)
   res.status(200).json(product);
    }
     catch(error){
         console.log(error.message)
         res.status(500)
 
     }
     
  };

module.exports={
    getproducts,
    getproduct,
    putproduct,
    deleteproduct,
    createproduct
}