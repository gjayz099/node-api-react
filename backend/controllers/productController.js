const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')


// ---- POST
const PostProducts = asyncHandler(async(req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }  
})


// ----- GET
const GetProducts = asyncHandler(async(req, res) => {
    try{    
        const product = await Product.find({})
        res.status(200).json(product)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})


// ----- GET ID
const GetProductsID = asyncHandler(async(req, res) => {
    try{
        const product_id = req.params.id
        const product = await Product.findById(product_id)
        res.status(200).json(product)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

// ----- PUT
const PutProducts  = asyncHandler(async(req, res) => {
    try{
        const product_id = req.params.id
        const product = await Product.findByIdAndUpdate(product_id, req.body)
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${product_id}`})
        }
        const updatedProduct = await Product.findById(product_id)
        res.status(200).json(updatedProduct)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

// ----- DELETE
const DeleteProducts = asyncHandler(async(req, res) => {
    try{
        const product_id = req.params.id
        const product = await Product.findByIdAndDelete(product_id, req.body)
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${product_id}`})
        }
        console.log('Success Delete Data')
        res.status(200).json({message: 'Success Delete Data'})
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

module.exports = {
    PostProducts,
    GetProducts,
    GetProductsID,
    PutProducts,
    DeleteProducts
}
