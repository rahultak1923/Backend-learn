const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post("/singin",async(req,res)=>{
    const { name, email, password}= req.body;
    if(!name || !email || !password){
        res.status(400); throw new Error("All fields is required");
        
    }
    const user = await User.create({
        name:name ,
        email:email,
        password:password
    })
    res.status(200).json(user)
})
