import express from "express";
import {URL} from "../Constants/URL"
import {userLogin,userInfo} from "../Controller/user"
import Authentication from "../Middlewares/Authentication";
const Router=express.Router();

Router.post(URL.loginUrl,userLogin)
Router.get( URL.fetchUser,Authentication,userInfo)
// Router.post("/register",userRegister)
export default Router;