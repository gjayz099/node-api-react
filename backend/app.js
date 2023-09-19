const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoute')
const ErrorMiddlerware = require('./middlewares/errorMiddlerware')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
// ---- USE JSON
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Hello App")
})




// ------ ROUTES
app.use('/api/products', productRoutes)


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
