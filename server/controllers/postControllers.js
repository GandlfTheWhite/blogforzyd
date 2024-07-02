const Post = require('../models/Post');

exports.getPosts = async(req,res)=>{
    try{
        const posts = await Post.find();
        res.status(200).json(post);
    }catch (error){
        res.status(500).json({error:error.message});
    }
};

exports.createPost = async(req,res)=>{
    const {title,content,author}=req.body;
    try{
        const newPost = newPost({title,content,author});
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};