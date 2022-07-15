import { Request, Response } from "express";
import MovieModel from "../Model/Movie";
import UserModel from "../Model/User";

export const newMovie = async (req: Request, res: Response): Promise<void> => {
  const { userId }= req.params;
  try {
    const movie = new MovieModel(req.body);
    const savedMovie = await movie.save();
    await UserModel.updateOne(
      { _id: userId },
      { $push: { MovieList: savedMovie._id! } }
    );
    res.status(200).json({
      message: "New Move has been added to list",
      data: savedMovie,
    });
  } catch (error: any) {
    res.send(404).json({
      message: `Error caused by ${error.message}`,
    });
  }
};
export const removeMovie = async (req: Request, res: Response): Promise<void> => {
  const { movieId, userId } = req.params;
  try {
    await MovieModel.deleteOne({ _id: movieId });
    const { MovieList }:any = await UserModel.findOne({ _id: userId });
    const filteredList: string[] = MovieList.filter((movie: string) => {
      movie != movieId;
    });
    await UserModel.updateOne(
      { _id: userId },
      { $set: { MovieList: filteredList } }
    );
    res.status(200).json({
      message: "Movie succesfully removed from list..",
    });
  } catch (error:any) {
    res.status(404).json({
      message: `Error caused due to ${error.message}`,
    });
  }
};
export const updateMovie=async( req: Request, res: Response): Promise<void> =>{
    const {movieId}=req.params;
    const {update}=req.body;
    try {
        const updatedMovie=await MovieModel.findOneAndUpdate({_id:movieId},{$set:update},{new:true});

        res.status(200).json({
            message:"Movie updated succesfully.",
            data:updatedMovie
        })
    } catch (error:any) {
        res.status(404).json({
            message: `Error caused due to ${error.message}`,
          });
    }
}