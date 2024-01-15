import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

const registerUser = async (req, res) => {
  try {
    const { fullName } = req.body;

    // check if the user exist
    const userExist = await User.findOne({});

    if (userExist) {
      // return response with status 401 and exit out of function
    }

    // hash the password before putting it in server
    const _ = await bcrypt.hash();

    // register user

    const user = await User.create({
      // pass the object value in here
    });

    // Check if user is register
    const createdUser = await User
      .findById
      // pass value
      ();

    return res
      .status(201)
      .json
      // pass the value
      ();
  } catch (error) {
    console.log("Register controller error :: Error : ", error);
  }
};

const loginUser = async (req, res) => {
  try {
    const {} = req.body;

    // check if the user exist
    const userExist = await User.findOne({});

    if (!userExist) {
      // return response with status 401 and exit out of function
    }

    // check if the password is incorrect
    const isPosswordCorrect = await bcrypt.compare(); // compare request password and database password

    if (!isPosswordCorrect) {
      // return response with status 401 and exit out of function
    }

    // creat a payload for JWT, you can store id or user email
    const payload = {
      // write payload
    };

    // generate token
    const token = generateToken(payload);

    // seting option for cookie
    // this make the cookie only modified by the server
    const option = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(201)
      .cookie("token", token, option)
      .json
      // return user with
      ();
  } catch (error) {
    console.log("Login controller error :: Error : ", error);
  }
};

export { registerUser, loginUser };
