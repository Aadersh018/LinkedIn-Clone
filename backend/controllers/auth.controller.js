import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"

export const register = async(req,res)=>{
  try{
    const {firstName,lastName,userName,email,password} = req.body
    if(!firstName || !lastName || !userName || !email || !password){
      return res.status(400).json({message:"all fields are required"})
    }
    if(password.length < 8){
      return res.status(400).json({message:"password should be atleast 8 characters"})
    }
    const existingUsername = await User.findOne({userName})
    if(existingUsername){
      return res.status(400).json({message:"username already exists"})
    } 
    const existingUser = await User.findOne({email})
    if(existingUser){
      return res.status(400).json({message:"user already exists"})
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword
    })
    return res.status(201).json({message:"new user created"})
  }catch(error){
    console.log(error)
    return res.status(500).json({message:"registration error"})
  }
} 

export const login = async(req,res)=>{
  try{
    const{email,password} = req.body
    if(!email || !password){
      return res.status(400).json({message:"all fields are required"})
    }
    const existingUser = await User.findOne({email})
    if(!existingUser){
      return res.status(400).json({message:"user does not exist"})
    }
    const isMatch = await bcrypt.compare(password, existingUser.password)
    if(!isMatch){
      return res.status(400).json({message:"invalid password"})
    }
    const token = generateToken(existingUser._id)
    return res.status(200).json({message:"user logged in successfully", token})
  }catch(error){
    console.log(error)
    return res.status(500).json({message:`login error ${error}`})
  }
}