import express from "express";
import http from "http";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import { initializeSocket } from "./services/socketService.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import doctorRoutes from "./routes/admin.js";
import adminRoutes from "./routes/admin.js";
import consultationRoutes from "./routes/consultation.js";

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);

initializeSocket(server);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/consultation", consultationRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
