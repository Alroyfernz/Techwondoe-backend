import { Request, Response } from "express";
import MovieModel from "../Model/Movie";
import UserModel from "../Model/User";

export const newMovie = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>> | undefined> => {
  const { userId } = req.params;
  try {
    const movie = new MovieModel(req.body);
    const savedMovie = await movie.save();
    await UserModel.updateOne(
      { _id: userId },
      { $push: { MovieList: savedMovie._id } }
    );
    return res.status(200).json({
      message: "New Move has been added to list",
      data: savedMovie,
    });
  } catch (error: any) {
    res.send(404).json({
      message: `Error caused by ${error.message}`,
    });
  }
};
export const removeMovie = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>> | undefined> => {
  const { movieId, userId } = req.params;
  try {
    await MovieModel.deleteOne({ _id: movieId });
    const { MovieList }: any = await UserModel.findOne({ _id: userId });
    console.log(MovieList, movieId);
    const filteredList: string[] = MovieList.filter((movie: any) => {
     const stringRef=movie.valueOf();
     console.log(stringRef);

     return stringRef!=movieId
    });
    console.log(filteredList);

    await UserModel.updateOne(
      { _id: userId },
      { $set: { MovieList: filteredList } }
    );
    return res.status(200).json({
      message: "Movie succesfully removed from list..",
    });
  } catch (error: any) {
    return res.status(404).json({
      message: `Error caused due to ${error.message}`,
    });
  }
};
export const updateMovie = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>> | undefined> => {
  const { movieId } = req.params;
  const { update } = req.body;
  try {
    const updatedMovie = await MovieModel.findOneAndUpdate(
      { _id: movieId },
      { $set: update },
      { new: true }
    );

    return res.status(200).json({
      message: "Movie updated succesfully.",
      data: updatedMovie,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: `Error caused due to ${error.message}`,
    });
  }
};
