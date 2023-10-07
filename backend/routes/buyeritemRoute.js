const express = require('express')
const { PostBuyerItems, GetBuyerItems, GetBuyerItemsID} = require('../controllers/buyeritemController')

const router = express.Router();

// api in BuyerItem
// ----- POST
router.post('/', PostBuyerItems)

// ----- GET
router.get('/', GetBuyerItems)


// ----- GIT ID
router.get('/:id', GetBuyerItemsID) 



module.exports = router