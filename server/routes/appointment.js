import express from "express";
import { createAppointment } from "../controllers/appointment.js";
import { userProtected } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", userProtected, createAppointment);

export default router;
