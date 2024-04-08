const mongoose = require('mongoose');

const productsScehma = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
          },
          description: {
            type: String,
            default: ''
          },
          price: {
            type: Number,
            required: true
          },
           quantity :{
            type: Number,
            required: true
           }
    }
)

const Product = mongoose.model('Product' , productsScehma)

module.exports= Product;