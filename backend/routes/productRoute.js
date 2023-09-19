const express = require('express')
const {PostProducts, GetProducts, GetProductsID, PutProducts, DeleteProducts} = require('../controllers/productController')



const router = express.Router();

// ----- POST
router.post('/', PostProducts)

// ----- GET
router.get('/', GetProducts)

// ---- GET ID
router.get('/:id', GetProductsID)

// ------ PUT
router.put('/:id', PutProducts)

// ---- Delete
router.delete('/:id', DeleteProducts)

module.exports = router