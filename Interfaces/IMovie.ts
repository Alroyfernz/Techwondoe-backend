import { Document } from "mongoose";

export  interface IMovie extends Document {
    Title: string;
    StreamingApp: string;
    Rating: number;
    Review:string
  }