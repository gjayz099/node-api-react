const asyncHandler = require('express-async-handler')
const BuyerItem = require('../models/buyeritemModel')
const User = require('../models/userModel')
const Product = require('../models/productModel')


// ----- POST
const PostBuyerItems =  asyncHandler(async(req, res) => {
    try{
        const user_id = req.params.userId
        const product_id = req.params.productId
        
        const user = await User.findOne(user_id)
        const product = await Product.findOne(product_id)

        if(!user && !product){
            return res.status(404).json({ message: 'User not found' });
        }

        const buyeritem =  await BuyerItem.create({
            bookingprice: req.body.bookingprice,
            users: [user._id],
            products: [product._id],
            receive: req.body.receive,
        })

        res.set("X-Api-Key", '5325325yygdfgg7532578ghtrhtr782532');
        res.status(200).json(buyeritem)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }  
})

// ----- GET
const GetBuyerItems = asyncHandler(async(req, res) => {
    try {
        const buyeritem = await BuyerItem.find({})
        .populate({
            path: 'users',
            select: ['firstname', 'lastname']
        })
        .populate({
            path: 'products',
            select: ['productname', 'catogoryname', 'price']
        })
        res.set("X-Api-Key", '5325325yygdfgg7532578ghtrhtr782532');
        res.status(200).json(buyeritem)
    }catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

// ----- GET ID
const GetBuyerItemsID = asyncHandler(async(req, res) => {
    try{
        const buyeritem_id = req.params.id
        const buyeritem = await BuyerItem.findById(buyeritem_id)
        .populate({
            path: 'users',
            select: ['firstname', 'lastname']
        })
        .populate({
            path: 'products',
            select: ['productname', 'catogoryname', 'price']
        })
        if(!buyeritem){
            return res.status(404).json({message: `cannot find any user with ID ${buyeritem_id}`})
        }
        res.set("X-Api-Key", '5325325yygdfgg7532578ghtrhtr782532');
        res.status(200).json(buyeritem)
    }catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

module.exports = {
    PostBuyerItems,
    GetBuyerItems,
    GetBuyerItemsID
}

