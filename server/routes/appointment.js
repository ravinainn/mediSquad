import express from "express";
import {
  createAppointment,
  endAppointment,
  paymentHandler,
} from "../controllers/appointment.js";
import { doctorProtected, userProtected } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", userProtected, createAppointment);
router.get("/:appointmentId/end", doctorProtected, endAppointment);
// router.post("/payment", userProtected, paymentHandler);
router.post("/payment", paymentHandler);

export default router;
