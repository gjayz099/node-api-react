const express = require('express')
const session = require('express-session');
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoute')
const userRoutes = require('./routes/userRoute')
const buyeritemsRoutes = require('./routes/buyeritemRoute')
const ErrorMiddlerware = require('./middlewares/errorMiddlerware')
const cookieParser = require('cookie-parser');
var cookieparser = require("cookieparser");

var cors = require('cors')
const app = express()
const port = 3000



app.use(cors())

app.use(cookieParser());
cookieparser.parse("foo=bar");
// ---- USE JSON
app.use(express.json())


// Initialize session middleware
app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: true,
    })
)

// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello App")
})


// ------ Product ROUTES
app.use('/api/products', productRoutes)

// ------ User ROUTES
app.use('/api/users', userRoutes)



// ------ Buyer ROUTES
app.use('/api/buyeritems', buyeritemsRoutes)


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
