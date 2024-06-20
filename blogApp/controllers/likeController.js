import Like from "../models/likeModel"
import Post from "../models/postModel"

const likePost = async (req, res) => {
    try{
        const {post, user} = req.body;
        const like = new Like({post, user});
        const savedLike = await like.save();

        //update the post collection based on this
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {likes : savedLike._id}}, {new : true}).populate("likes").exec();

        res.status(200).json({
            success : true,
            post : updatedPost,
            message : "Post liked successfully"
        })
    }catch(err) {
        res.status(500).json({
            success : false,
            message : "Issue in liking post",
            error : err?.message
        })
    }
}

export {likePost}