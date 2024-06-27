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

//Model is like a class which contains the properties and behaviour
const Comment = mongoose.model("Comment", commentSchema);
export default Comment;

//Different ways to export
// module.exports = myObject;
// module.exports = myFunction;
//To export multiple functions
// exports.myFunction1 = myFunction1; exports.myFunction2 = myFunction2;