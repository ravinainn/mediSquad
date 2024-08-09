import express from "express";
import dotenv from "dotenv";
import http from "http";
import connectDB from "./config/database";

dotenv.config();
connectDB();

const app = express();
// const server = http.createServer(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
