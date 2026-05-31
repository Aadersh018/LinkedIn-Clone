import User from "../models/user.model.js"

export const updateProfile = async(req,res)=>{
  try{
    const userId = req.userId
    const allowedFields = ["firstName", "lastName", "headline", "skills", "bio", "location" ]
    const updateData = {}
    Object.keys(req.body).forEach((key)=>{
      if(allowedFields.includes(key)){
        updateData[key] = req.body[key]
      }
    })
    console.log(updateData)
    const user = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true }
    );
    res.json(user)
  }catch(error){
    console.log(error)
    return res.status(500).json({message:"update profile error"})
  }
}