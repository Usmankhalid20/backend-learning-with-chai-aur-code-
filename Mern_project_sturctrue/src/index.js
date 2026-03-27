// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

// const app = express();

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`server running on port ${process.env.PORT || 8000}`);
  }) 
})
.catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
})
// app.get("/", (req, res) => {
//   res.send("API Running");
// });

// app.listen(process.env.PORT || 5000, () => {
//   console.log("Server running");
// });
// import express from "express";

// const app = express();

// const connectDB = async () => {
//     try {
//          await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//         app.on(error, (error) => {
//             console.error("MongoDB connection error:", error);
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//         console.log("MongoDB connected successfully");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
// };

// export default connectDB;   