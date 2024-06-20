// In comment model, we have 3 things
// - The post on which comment added (id of that post)
// - Who has added the comment (user id)
// - Body of the comment

import mongoose from "mongoose";

//route handler
const commentSchema = new mongoose.Schema({
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post" //reference to post model
    },
    user : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    }
})

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;