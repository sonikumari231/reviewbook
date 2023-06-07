const mongoose = require('mongoose');
const reviewScheme = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type: String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    reviewText:{
        type:String,
        required:true,
    }
});
module.exports = mongoose.model('Review',reviewScheme);