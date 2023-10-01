const express = require('express')
const { PostUsers, GetUsers } = require('../controllers/userController')


const router = express.Router();

// ----- POST
router.post('/', PostUsers)

// ----- Get
router.get('/', GetUsers)

module.exports = router