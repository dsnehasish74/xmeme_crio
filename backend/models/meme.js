const mongoose = require('mongoose');
const { Schema } = mongoose;

const memeSchema = new Schema({
    name:{
        type:String,
        trim: true
    },
    url:{
        type:String,
        unique: true
    },
    caption:{
        type:String,
    }
},{timestamps:true});

module.exports = mongoose.model('Meme',memeSchema);