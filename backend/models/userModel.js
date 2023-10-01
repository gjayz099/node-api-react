const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, 'Please Enter a Firstname']
        },
        lastname: {
            type: String,
            required: [true, 'Please Enter a Lastname']
        },
        username: {
            type: String,
            required: [true, 'Please Enter a Username']
        },
        email: {
            type: String,
            required: [true, 'Please Enter a Email']
        },
        password: {
            type: String,
            required: [true, 'Please Enter a Password']
        },
        conpassword: {
            type: String,
            required: [true, 'Please Enter a Confirm Password']
        },
        role: {
            type: String,
            required: false
        }
    },
    {
        timestamps : true
    }
)

const Usermodel = mongoose.model("User", userSchema)

module.exports = Usermodel