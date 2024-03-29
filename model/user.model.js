import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // this will make the email unique
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);
