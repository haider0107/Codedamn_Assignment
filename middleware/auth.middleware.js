import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

export const verifyToken = async (req, res, next) => {
  try {
    // Get token from user
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      // If no token, return response with message "Unauthorized request" status code "400"
    }

    // decode the token with JWT SECRET
    const decodedToken = jwt.verify();

    const user = await User.findById(decodedToken._id).select("-password");

    if (!user) {
      // If no user, return response with message "Invalid access token" status code "400"
    }

    // set the request with user value

    // If everything goes well run next() so that controller could run after this
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Invalid token / token expired" });
  }
};
