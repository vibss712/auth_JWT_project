const userModel = require('../models/user.model');
const jwt = require("jsonwebtoken");


async function registerUser(req, res) {
    const { username , email , password } = req.body;
    
    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    if (isUserAlreadyExists){
        return res.status(409).json({
            message : "User already exists"
        })
    }
    const user = await userModel.create({     //user create
        username, email, password             //user register -> store in DB -> DB give a token 
    })                                        //npm i jsonwebtoken ->to create token 
    const token = jwt.sign({
        id : user._id,
    }, process.env.JWT_SECRET)                 //jwtsecrets.com->generate a jwtsecret key
     
    res.cookie("token",token)                 //at client side/browser side we are gonna save cookie with the name token 

    res.status(201).json({
        message : "User registered successfully",
        user
    })
} 

module.exports = {registerUser}   //{}export empth object 
//{registerUser} function is being exported