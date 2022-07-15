import { model, Schema } from "mongoose";
const {ObjectId}=Schema.Types;
const userScehma = new Schema(
  {
   FullName:{
    type:String,
    required:true
   },
   Email:{
    type:String,
    required:true
   },
   Password:{
    type:String,
    required:true
   },
   MovieList:[{
    type:ObjectId,
    ref:'Movie'
   }]
  },
  { timestamps: true }
);

export default model("User", userScehma);
