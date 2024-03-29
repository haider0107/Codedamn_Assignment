import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERR: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 1337, () => {
      console.log(`⚙️  Port is running on ${process.env.PORT || 1337}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!! ", err);
  });
