import express from "express";
import http from "http";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

import userRoute from "./routes/user.js";
import doctorRoute from "./routes/doctor.js";

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);

app.use("/api/user", userRoute);
app.use("/api/doctor", doctorRoute);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
