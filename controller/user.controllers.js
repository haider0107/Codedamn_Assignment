import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(401).json({ message: "User already registerd" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      fullName,
      passowrd: hashPassword,
    });

    const createdUser = await User.findById(user._id).select("-password");

    return res
      .status(201)
      .json({ success: "User registered successfully", createdUser });
  } catch (error) {
    console.log("Register controller error :: Error : ", error);
    res.status(500).json({ error });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res
        .status(401)
        .json({ message: "Email or Password is incorrect." });
    }

    const isPosswordCorrect = await bcrypt.compare(
      password,
      userExist.password
    );

    if (!isPosswordCorrect) {
      return res
        .status(401)
        .json({ message: "Email or Password is incorrect." });
    }

    const payload = {
      email: userExist.email,
      _id: userExist._id,
    };

    const token = generateToken(payload);

    const option = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("token", token, option)
      .json({ success: "User login successFully" });
  } catch (error) {
    console.log("Login controller error :: Error : ", error);
    res.status(500).json({ error });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const user = req.user;
    return res.status(200).json({ success: "User fetched successfully", user });
  } catch (error) {
    console.log("Get current user controller error :: Error : ", error);
    res.status(500).json({ error });
  }
};

export { registerUser, loginUser, getCurrentUser };
