const userModel = require('../models/user.model');
const jwt = require("jsonwebtoken");


async function registerUser(req, res) {
    const { username , email , password } = req.body;
    
    const user = await userModel.create({     //user create
        username, email, password             //user register -> store in DB -> DB give a token 
    })                                        //npm i jsonwebtoken ->to create token 
    const token = jwt.sign({
        id : user._id,
    }, process.env.JWT_SECRET)                 //jwtsecrets.com->generate a jwtsecret key
            
    res.status(201).json({
        message : "User registered successfully",
        user,
        token
    })
} 

module.exports = {registerUser}   //{}export empth object 
//{registerUser} function is being exported