const express = require('express');
const authController = require("../controllers/auth.controller"); 

const router = express.Router();

// POST /api/auth/register    {http://localhost:3000/api/auth/register}
router.post("/register",authController.registerUser)

/*router.get("/test",(req,res)=>{
    console.log("cookie : ", req.cookies);
    res.json({
        message : "test route",
        cookies : req.cookies
    })
})
*/

module.exports = router;