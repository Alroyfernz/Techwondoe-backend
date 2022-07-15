

import UserModel from "../Model/User";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const PRIVATE_KEY = process.env.PRIVATE_KEY;


export const userLogin = async (req: Request, res: Response) => {
    console.log("reached here...");
    
  const { email, password } = req.body;
  try {
    const user:any = await UserModel.find({ Email: email });
    if (!user) {
      res.status(500).json({
        messgae: `No user with email ${email} exists.`,
      });
    }
    if (!bcrypt.compare(password, user.Password))
      res.status(500).json({
        messgae: `you have entered an invalid password.`,
      });
    const token = jwt.sign({ email: user.email }, PRIVATE_KEY as string);
    res.status(200).json({
      message: "User Login succesfull",
      token,
      data: user,
    });
  } catch (error:any) {
    return res.status(500).json({
        message:`Error caused due to ${error.message}`
    })
  }
};


export const userInfo= async (req: Request, res: Response) => {
    const {userId}=req.params;
    try {
        const userData=await UserModel.findById(userId).populate("MovieList");
        res.status(200).json({
            message:"User Data fetched succesfully",
data:userData
        })
    } catch (error:any) {
        return res.status(500).json({
            message:`Error caused due to ${error.message}`
        })
      }
}
export const userRegister=async(req: Request, res: Response)=>{
try {
    const user= new UserModel(req.body);
    await user.save();
    res.status(200).json("user saved succ.")
} catch (error) {
    
}
}
