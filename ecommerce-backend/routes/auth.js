import express from 'express'
import userModel from '../module/User.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
const router = express.Router()


//Register
router.post("/register",async (req,res)=>{
    const hashPassword = await bcrypt.hash(req.body.password,10)
    const newUser = new userModel({
        username:req.body.username,
        email: req.body.email,
        password: hashPassword
    })
    try {
        const user = await newUser.save()
        res.status(201).json(user)
    }catch(err) {
        res.status(500).json(err)
    }
    
})

//Login

router.post("/login",async (req,res)=>{
    
    try{
        const user = await userModel.findOne({username:req.body.username})
        if(!user) {
            res.status(401).json("wrong credential")
        }
        
        if(!bcrypt.compare(req.body.password, user.password)){
            res.status(401).json("wrong credential")
        }
        
        const accessToken = jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin
        },
        process.env.JWT_SEC,
        {expiresIn:'3d'}
        )
        const {password , ...info} = user._doc;   
        res.status(201).json({info,accessToken})
    }catch(err){
        res.status(500).json(err)
    }
})

export default router;