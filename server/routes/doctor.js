import express from "express";
import {
  doctorRegister,
  DoctorLogin,
  doctorLogout,
} from "../controllers/authController.js";
import { doctorProtected } from "../middleware/auth.js";
import { getDoctorPatients } from "../controllers/doctor.js";
const router = express.Router();

router.post("/register", doctorRegister);
router.post("/login", DoctorLogin);
router.get("/logout", doctorProtected, doctorLogout);
router.get("/patientlist", doctorProtected, getDoctorPatients);

router.get("/test", doctorProtected, (req, res) => {
  res.status(200).json({
    message: `Welcome Dr. ${req.doctor.name}, this is your dashboard.`,
  });
});

export default router;
