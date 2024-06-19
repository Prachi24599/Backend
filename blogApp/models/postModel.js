// Title of post
// Body/description of the post
// likes array (the post can be liked my many users)
// comments array (the comments can be added by many users)

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like" //reference to like schema
    }],
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment" //reference to comment schema
    }]
})

module.exports = mongoose.model("Post", postSchema);