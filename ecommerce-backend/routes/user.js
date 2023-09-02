import express from 'express'
import bcrypt from 'bcrypt'
import User from '../module/User.js';

import { verify } from 'jsonwebtoken';
const router = express.Router()

//Update user
router.put('/:id',verify,async (req,res)=> {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        if(req.body.password){
        req.body.password =bcrypt.hash(req.body.password,10)
        }
        try {
            const updateUser = await  User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },
            {new:true}
            );
            const {password , ...info} = updateUser._doc;
            res.status(200).json(info)
        }catch(err){
            res.status(500).json(err)
        }
    }
    else {
        res.status(403).json("you can only update your account")
    }
})

///Delete user
router.delete('/:id',verify,async (req,res)=> {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("user has been delete")
        }catch(err) {
            res.status(500).json(err)
        }
    }
    else {
        res.status(403).json("you can only update your account")
    }
})

//Get
router.get("/find/:id", verify, async (req, res)=> {
    try {
        const user = await User.findById(req.params.id)
        
        const {password, ...others} = user._doc;
        res.status(200).json(others)
        
    }catch(err) {
        res.status(500).json(err)
    }
})

//Get all user
router.get("/", verify, async (req, res)=> {
    const query = req.query.new;
    if(req.user.isAdmin) {
        try {
            const users = query? await User.find().sort({_id:1}).limit(2):await User.find()
             
            res.status(200).json(users)
            
        }catch(err) {
            res.status(500).json(err)
        }
    }else {
        res.status(403).json("you are not allow to see all users")
    }
    
})

//user state
router.get("/state", async (req, res) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear -1))

    try {
        const data = await User.aggregate([
            {$match: { createdAt: {$gte:lastYear }}},
            {
                $project: {
                    month: {$month: "$createdAt"}
                }
            },
            {
                $group: {
                    _id:"$month",
                    total:{$sum:1}
                },
            },
        ])
        console.log(data)
        res.status(200).json(data);
    }catch(err) {
        res.status(500).json(err)
    }
})

export default router