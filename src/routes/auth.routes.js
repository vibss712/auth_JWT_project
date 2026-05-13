const express = require('express');
const authController = require("../controllers/auth.controller"); 

const router = express.Router();

// POST /api/auth/register    {http://localhost:3000/api/auth/register}
router.post("/register",authController.registerUser)

module.exports = router;