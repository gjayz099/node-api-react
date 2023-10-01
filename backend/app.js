const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoute')
const userRoutes = require('./routes/userRoute')
const ErrorMiddlerware = require('./middlewares/errorMiddlerware')

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
