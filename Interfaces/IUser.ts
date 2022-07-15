import {Schema,Document} from "mongoose";
const {ObjectId}=Schema.Types;

export default interface IUser extends Document {
    FullName: string;
    Email: string;
    Password: number;
    MovieList:typeof ObjectId[]
   }