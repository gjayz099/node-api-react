const mongoose = require('mongoose')
const Schema = mongoose.Schema


const buyeritemSchema = new mongoose.Schema(
    {

        bookingprice: {
            type: Number,
            required: true
        },
        users: [
            {type: Schema.Types.ObjectId, ref: "User"}
        ],
        products: [
            {type: Schema.Types.ObjectId, ref: "Product"}
        ],
        receive: {
            type: Date
        }

    },
    {
        timestamps : true
    }
)

const BuyerItemmodel = mongoose.model('BuyerItem', buyeritemSchema)

module.exports = BuyerItemmodel

