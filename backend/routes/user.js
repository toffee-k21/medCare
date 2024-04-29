const express = require("express");
const User = require("../models/user");
const userRouter = express.Router();

userRouter.post("/register",async (req,res)=>{
    const createUser = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
res.send(createUser)
})


module.exports = userRouter