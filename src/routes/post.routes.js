const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

/*
router.post("/create",(req,res)=>{
    console.log(req.body)
    console.log(req.cookies)  //cookies jo saved hai abhi postman mein
    res.send("Post created successfully")
})
*/
/*
router.post("/create",(req,res)=>{

    const token = req.cookies.token;   //postman se cookies remove -> token remove then call api -> unauthorized

    if(!token){
        return res.status(401).json({
            message : "unauthorized"
        })
    }
                                            //here we checked if there is token or not 
    res.send("Post created successfully")  //in cookies put any random token = djbuiafvefhv then call api -> post created 
                                           //which means post was created with wrong token (which is wrong)
})
*/

router.post("/create",async (req,res)=>{

    const token = req.cookies.token;   //postman se cookies remove -> token remove then call api -> unauthorized

    if(!token){
        return res.status(401).json({
            message : "unauthorized"
        })
    }
    try{

        const decoded = jwt.verify(token,process.env.JWT_SECRET)   //to verify is the token is correct or not 
        const user =  await userModel.findOne({
            _id: decoded.id
        })
        console.log(user)
    }
    catch(err){
        return res.status(401).json({
            message : "Unauthorized : invalid token"
        })
    }
    res.send("Post created successfully")  
})

module.exports = router;