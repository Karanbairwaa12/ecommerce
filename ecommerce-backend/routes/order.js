import express from 'express'
import bcrypt from 'bcrypt'
import orderModel from '../module/Order.js';

import { verify } from 'jsonwebtoken';
const router = express.Router()

router.post("/",verify,async (req, res)=> {
    const neworder = new orderModel(req.body)
    console.log(neworder)
    if(req.user.isAdmin) {
        try{
        const saveorder  = await neworder.save()
        res.status(200).json(saveorder)
        }catch(err) {
            res.status(500).json(err)
        }
    }else {
        res.status(403).json("you are not allow to see all users")
    }
    
})

//Update user
//verifyAndAdmin
router.put('/:id',verify,async (req,res)=> {

    try {
        const updateorders = await  orderModel.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },
        {new:true}
        );
        const {password , ...info} = updateorders._doc;
        res.status(200).json(info)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get order
router.get("/find/:userId",async (req, res)=> {
    try {
        const order = await orderModel.findOne({userId:req.params.userId})
        res.status(200).json(order)
        
    }catch(err) {
        res.status(500).json(err)
    }
})

// //Delete
//verifyAndAdmin
router.delete("/:id", verify,async (req, res)=> {
    try {
        await orderModel.findByIdAndDelete(req.params.id)
        res.status(200).json("order has been delete")
    }catch(err) {
        res.status(500).json(err)
    }
})

// //get all order

router.get("/",verify,async (req, res)=> {
   
    try {
        const order = await orderModel.find()
        res.status(200).json(order)
    }catch(err) {
        res.status(500).json(err)
    }
})

//get monthly icome
router.get("/income", verify, async (req, res)=> {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() -1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1))

    try {
        const income = await orderModel.aggregate([
            {$match: {createdAt:{$gte:previousMonth}}},
            {
                $project :{
                    month :{$month:"$createdAt"},
                    sales:"$amount",
                },

            },
            {          
                $group: {
                        _id:"$month",
                        total:{$sum:"$sales"},
                    },
                
            },
        ]);
        res.status(200).json(income)
    }catch(err) {
        res.status(500).json(err)
    }
})

export default router;