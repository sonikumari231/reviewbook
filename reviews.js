const express = require('express');
const router = express.Router();

const Review = require('../models/Review');
 router.post('/',async(req,res)=>{
    try{
        const review = await Review.create(req.body);
        res.status(201).json(review);

    }
    catch(error){
        res.status(500).json({ error: 'Something went wrong'});

    }
 });
 router.get('/',async(req,res)=>{
    try{
        const reviews =  await Review.find();
        res.json(reviews);

    }
    catch(error){
        res.status(500).json({error:'Something went wrong'});
    }
 });
 module.exports=router;