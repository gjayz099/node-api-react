const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')


// ---- GET
const GetUsers = asyncHandler(async(req, res) => {
    try{
        const user = await User.find({})
        res.status(200).json(user)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }  
})


// ----- GET ID
const GetUsersID = asyncHandler(async(req, res) => {
    try{
        const user_id = req.params.id
        const user = await User.findById(user_id)
        res.status(200).json(user)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})


// ----- PUT
const PutUsers  = asyncHandler(async(req, res) => {
    try{
        const user_id = req.params.id
        const user = await User.findByIdAndUpdate(user_id, req.body)
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${user_id}`})
        }
        const updatedUser = await User.findById(user_id)
        res.status(200).json(updatedUser)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})


// ----- DELETE
const DeleteUser = asyncHandler(async(req, res) => {
    try{
        const user_id = req.params.id
        const user = await User.findByIdAndDelete(user_id, req.body)
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${user_id}`})
        }
        console.log('Success Delete Data')
        res.status(200).json({message: 'Success Delete Data'})
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})



// ----- REGISTER
const RegisterUser = asyncHandler(async(req, res) => {
    try {
        const { password, conpassword } = req.body

        if (password !== conpassword) {
            return res.status(400).json({ msg: "Password and Confirm Password do not match" })
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            conpassword: hashedPassword,
            role: req.body.role,
        });
        res.status(200).json(user)
        console.log(user)
        res.json({msg: "Registration Successful"}) // You can send a response with the created user or any other desired response.
      } catch (error) {
        console.error(error);
        res.status(500).send({
          message: "Password was not hashed successfully",
          error: error.message,
        });
    }
})

// ----- LOGIN
const LoginUser = asyncHandler(async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
    
        if (!user) {
            return res.status(400).json({ msg: "User not found" })
        }
    
        const match = await bcrypt.compare(req.body.password, user.password)
  
        if (!match) {
            return res.status(400).json({ msg: "Wrong Password" })
        }
  
        const token = jwt.sign(
            {
            userId: user._id,
            userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
        );
  
        res.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
        });
        console.log(user)
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Login failed",
            error: error.message,
        });
    }
})


// ----- CHANGE PASSWORD
const changePassword = asyncHandler(async (req, res) => {
    try {
        const user_id = req.params.id;
        const user = await User.findById(user_id);
    
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }
    
        const { oldPassword, newPassword, confirmPassword } = req.body;
    
        // Compare the provided oldPassword with the hashed password stored in the user object
        const isMatch = await bcrypt.compare(oldPassword, user.password);
    
        if (!isMatch) {
            return res.status(400).json({ msg: "Old password is incorrect" });
        }
    
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ msg: "New password and confirm password do not match" });
        }
    
        // Generate a new salt and hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
    
        user.password = hashedPassword;
        await user.save();
        
        res.status(200).json({ msg: "Password changed successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Password change failed", error: error.message });
    }
});
  

module.exports = {
    GetUsers,
    GetUsersID,
    PutUsers,
    DeleteUser,
    RegisterUser,
    LoginUser,
    changePassword
}