const express = require('express')
const { verifyToken } = require('../middlewares/authMiddleware')
const { GetUsers, GetUsersID, PutUsers, DeleteUser, RegisterUser, LoginUser, changePassword } = require('../controllers/userController')


const router = express.Router();


// ----- GET ALL and VERIFY TOKEN
router.get('/', GetUsers, verifyToken)


// ---- GET ID
router.get('/:id', GetUsersID)

// ------ PUT
router.put('/:id', PutUsers)

// ---- Delete
router.delete('/:id', DeleteUser)

// ---- REGISTER
router.post('/register', RegisterUser)

//  ------ Login ROURoutesTES
router.post("/login", LoginUser)

//  ------ Change Password Routes
router.post("/change-password/:id", changePassword)

module.exports = router