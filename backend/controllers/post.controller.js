import Post from "../models/post.model.js"


export const createPost = async(req,res)=>{
  try{
    const userId = req.userId
    const {content,image} = req.body
    if(!content){
      return res.status(400).json({message:"content is required"})
    }
    const post = await Post.create({
      author: userId,
      content,
      image
    })
    return res.status(201).json({message:"post created successfully",post})
  }catch(error){
    console.log(error)
    return res.status(500).json({message: "Error creating post"});
  }
}

export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "firstName lastName headline profileImage")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "feed fetched successfully",
      posts
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error fetching feed" });
  }
};

export const likePost = async(req,res)=>{
  try{
    
  }catch(error){
    console.log(error)
  }
}