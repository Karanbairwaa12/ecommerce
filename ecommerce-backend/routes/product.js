import express from 'express'
import bcrypt from 'bcrypt'
import productModel from '../module/Product.js';

import { verify } from 'jsonwebtoken';
const router = express.Router()

router.post("/",async (req, res)=> {
    const newProduct = new productModel(req.body)
    console.log(newProduct)
    
    try{
        const saveProduct  = await newProduct.save()
        res.status(200).json(saveProduct)
    }catch(err) {
        res.status(500).json(err)
    }
})

//Update user
router.put('/:id',verify,async (req,res)=> {

    try {
        const updateProducts = await  productModel.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },
        {new:true}
        );
        const {password , ...info} = updateProducts._doc;
        res.status(200).json(info)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get product
router.get("/find/:id",async (req, res)=> {
    try {
        const product = await productModel.findById(req.params.id)
        res.status(200).json(product)
        
    }catch(err) {
        res.status(500).json(err)
    }
})

// //Delete
router.delete("/:id",verify,async (req, res)=> {
    try {
        await productModel.findByIdAndDelete(req.params.id)
        res.status(200).json("product has been delete")
    }catch(err) {
        res.status(500).json(err)
    }
})

// //get all product

router.get("/",async (req, res)=> {
    const qNew = req.query.new
    const qCategory = req.query.categorie
    
    try {
        let product 
        if(qNew) {
            product = await productModel.find().sort({createdAt: -1}).limit(1)
        }else if(qCategory) {
            product = await productModel.find({
                categorie: {
                    $in:[qCategory],
                },
            })
        }else {
            product = await productModel.find()
        }
        res.status(200).json(product)
    }catch(err) {
        res.status(500).json(err)
    }
})

export default router;