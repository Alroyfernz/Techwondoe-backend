import { model, Schema ,Document} from "mongoose";


export interface IMovie extends Document {
  Title: string;
  StreamingApp: string;
  Rating: number;
  Review:string
}

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
