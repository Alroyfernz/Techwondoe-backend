import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  const SECRET_KEY = process.env.PRIVATE_KEY;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  try {
    if (!token)
      res.status(401).json({
        message: "You are not authorized to access this route",
      });
    const user = await jwt.verify(token as string, SECRET_KEY as string);
    if (user) next();
  } catch (error: any) {
    res.status(403).json(`Error occured due to ${error.message}`);
  }
};
