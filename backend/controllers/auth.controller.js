export const register = async(req,res)=>{
  try{
    const {firstName,lastName,userName,email,password} = req.body
    if(!firstName || !lastName || !userName || !email || !password){
      return res.status(400).json({message:"all fields are required"})
    }
    if(password.length < 8){
      return res.status(400).json({message:"password should be atleast 8 characters"})
    }
  }catch(error){
    return res.status(400).json({message:"registration error"})
  }
}