const authMiddleware = async(req,res,next)=>{
  try{
    const {token} = req.body
    jwt.verify(token, process.env.JWT_SECRET)
  }catch(error){
    console.log(error)
  }
}