import { model, Schema} from "mongoose";
import {IMovie} from "../Interfaces/IMovie";



const movieScehma = new Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    StreamingApp: {
      type: String,
      required: true,
    },
    Rating: {
      type: Number,
      max: 5,
      require: true,
    },
    Review: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

export default  model<IMovie>("Movie", movieScehma);
