const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// ---- POST
const PostUsers = asyncHandler(async(req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(200).json(user)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }  
})


// ---- GET
const GetUsers = asyncHandler(async(req, res) => {
    try{
        const user = await User.find({})
        res.status(200).json(user)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }  
})
module.exports = {
    PostUsers,
    GetUsers
}