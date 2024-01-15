import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passowrd: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);
