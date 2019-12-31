const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    postId:String,
    comment:String,
    date:{
        current:Date,
        confirm:Date
    },
    confirm:Number,
    ipAdres:String,
    userAgent:String
});



module.exports = mongoose.models.comments ? mongoose.model('comments') : mongoose.model('comments',commentSchema);