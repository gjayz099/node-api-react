const express = require('express')
const { PostBuyerItems, GetBuyerItems, GetBuyerItemsID} = require('../controllers/buyeritemController')

const router = express.Router();

// api in BuyerItem
// ----- POST
router.post('/buyeritems', PostBuyerItems)

// ----- GET
router.get('/buyeritems', GetBuyerItems)


// ----- GIT ID
router.get('/buyeritems/:id', GetBuyerItemsID) 



module.exports = router