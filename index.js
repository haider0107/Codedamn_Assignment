import 'dotenv/config'
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    // Write code here
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!! ", err);
  });