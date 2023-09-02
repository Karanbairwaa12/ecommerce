import express from 'express'
import bcrypt from 'bcrypt'
import cartModel from '../module/Cart.js';

import { verify } from 'jsonwebtoken';
const router = express.Router()

router.post("/",verify,async (req, res)=> {
    const newcart = new cartModel(req.body)
    console.log(newcart)
    try{
        const savecart  = await newcart.save()
        res.status(200).json(savecart)
    }catch(err) {
        res.status(500).json(err)
    }
})

//Update user

router.put('/:id',verify,async (req,res)=> {

    try {
        const updatecarts = await  cartModel.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },
        {new:true}
        );
        const {password , ...info} = updatecarts._doc;
        res.status(200).json(info)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get cart
router.get("/find/:userId",async (req, res)=> {
    try {
        const cart = await cartModel.findOne({userId:req.params.userId})
        res.status(200).json(cart)
        
    }catch(err) {
        res.status(500).json(err)
    }
})

// //Delete
router.delete("/:id", verify,async (req, res)=> {
    try {
        await cartModel.findByIdAndDelete(req.params.id)
        res.status(200).json("cart has been delete")
    }catch(err) {
        res.status(500).json(err)
    }
})

//get all cart

router.get("/",verify,async (req, res)=> {
   
    try {
        const cart = await cartModel.find()
        res.status(200).json(cart)
    }catch(err) {
        res.status(500).json(err)
    }
})

export default router;