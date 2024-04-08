const express = require('express');
const router = express.Router();
const Product = require('../Models/productsScehma');
const { getproducts,getproduct,putproduct, deleteproduct, createproduct} = require('../Controller/ProductController');




router.get("/" ,getproducts);
router.get("/:id" ,getproduct);
router.put("/:id" ,putproduct);
router.delete("/:id" ,deleteproduct)
router.post("/" , createproduct)
module.exports=router;