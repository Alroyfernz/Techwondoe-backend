import { model, ObjectId, Schema } from "mongoose";
const {ObjectId}=Schema.Types;


export interface IUser extends Document {
   FullName: string;
   Email: string;
   Password: number;
   MovieList:typeof ObjectId[]
  }
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

export default model<IUser>("User", userScehma);
