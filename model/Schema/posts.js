const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userId:String,
    title:String,
    slug:String,
    details:String,
    image:String,
    tags:String,
    permisions:{
        share:Boolean,
        comment:Boolean
    },
    date:{
        current:Date,
        update:Date
    }

});



module.exports = mongoose.models.posts ? mongoose.model('posts') : mongoose.model('posts',postSchema);