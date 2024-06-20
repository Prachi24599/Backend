import Post from "../models/postModel";
import Comment from "../models/commentModel";

const createComment = async (req, res) => {
    try{
        //fetch the data from req body
        //post Id, user Id, body
        const {post, user, body} = req.body; 
        
        //create a comment object 
        const comment = new Comment({post, user, body})

        //save the new comment into database
        const savedComment = comment.save();

        //find the post by ID, add a new comment to it's array
        //post - search by post id in findByIdAndUpdate 
        //$push is update operator, it updates the entry and pull is delete operator
        //{comments : savedComment._id} - inserting new id in the comments array
        //{new : true} - return the updated entry(document) means after adding the comment id (and not the old entry)
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comments : savedComment._id}}, {new : true})
                            .populate("comments") //populate the comments array with comment document (we only get comment ids but we can entire document)
                            .exec();

        res.json({
            post : updatedPost
        })
    } catch {
        return res.status(500).json({
            error : "Error while creating comment"
        })
    }
}