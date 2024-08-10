import express from "express";
import { doctorRegister, DoctorLogin } from "../controllers/authController.js";
import { doctorProtected } from "../middleware/auth.js";
const router = express.Router();

router.post("/register", doctorRegister);
router.post("/login", DoctorLogin);
// router.get("/appointment-list",appointmentList);
router.get("/test", doctorProtected, (req, res) => {
  res.status(200).json({
    message: `Welcome Dr. ${req.doctor.name}, this is your dashboard.`,
  });
});

export default router;
