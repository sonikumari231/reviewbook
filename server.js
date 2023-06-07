const express = require('express');
const mongoose = require('mongoose');
const reviewRoutes = required('./routes/reviews');
 const app = express();
 const port= 3000;

 //connect to MongoDB
 mongoose.connect('mongodb://localhost/book_reviews',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
 })

 .then(()=>{
    console.log('Connected to MongoDB');
 })
 .catch((error)=>{
    console.error('Error connecting to MongoDB:',error);
 });

 //Middleware
 app.use(express.json());

 //Routes
 app.use('/reviews',reviewRoutes);

 // Start the server
 app.listen(port,()=>{
    console.log(`Server started on port `);
 })