import express from "express";
import {URL} from '../Constants/URL';
import {newMovie,removeMovie,updateMovie}from '../Controller/movie';
import Authentication from "../Middlewares/Authentication";

const Router=express.Router();
Router.post(URL.addMovie,Authentication,newMovie)
Router.delete(URL.deleteMovie,Authentication,removeMovie)
Router.post(URL.updateMovie,Authentication,updateMovie)
export default Router;