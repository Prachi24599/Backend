import Post from "../models/postModel.js";

const createPost = async (req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({title, body});
        const savedPost = await post.save();

        res.status(200).json({
            success : true,
            post : savedPost,
            message : "Post created successfully"
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message : "Issue in creating post"
        })
    }
}

const getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message : "Issue in creating post"
        })
    }
}

export {createPost, getAllPosts};