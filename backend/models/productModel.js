const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please Enter a Name']
        },
        productname: {
            type: String,
            required: [true, 'Please Enter a Product Name']
        },
        catogoryname: {
            type: String,
            required: [true, 'Please Enter a Product Name']
        },
        quantity: {
            type: Number, 
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        Image: {
            type: String,
            required: false,
        }
    }, 
    {
        timestamps : true
    }
)

const Productmodel = mongoose.model('Product', productSchema)

module.exports = Productmodel