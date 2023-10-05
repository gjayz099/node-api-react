const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoute')
const userRoutes = require('./routes/userRoute')
const ErrorMiddlerware = require('./middlewares/errorMiddlerware')


const BuyerItem = require('./models/buyeritemModel')
const User = require('./models/userModel')
const Product = require('./models/productModel')

var cookieparser = require("cookieparser");
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

cookieparser.parse("foo=bar");
// ---- USE JSON
app.use(express.json())


// app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("Hello App")
})


// ------ Product ROUTES
app.use('/api/products', productRoutes)

// ------ User ROUTES
app.use('/api/users', userRoutes)



// 
app.post('/buyeritem', async(req, res) => {
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

        res.status(200).json(buyeritem)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }  
})

app.get('/buyeritem', async (req, res) => {
    try {
        const buyeritem = await BuyerItem.find({})
        .populate({
            path: 'users',
            select: ['firstname', 'lastname']
          })
          .populate({
            path: 'products',
            select: ['productname', 'catogoryname', 'price']
          });
        res.status(200).json(buyeritem)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
});

// ----- ERROR
app.use(ErrorMiddlerware);


// ------ CONNECT MONGODB
mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://dbgjayz:123456789admin@dbgjayz.0sjyvxm.mongodb.net/?retryWrites=true&w=majority')
.then(() => 
    console.log('Connected!'))
    app.listen(port, () => {
    console.log(`Start app listening on port ${port}`)
})
