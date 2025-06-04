import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

// files
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

// configuration
dotenv.config();

connectDB();

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// PORT
const PORT = process.env.PORT;

// routes
app.use("/api/v1/users", userRoutes);

// server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
