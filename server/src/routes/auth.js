import express from "express";
import {
  register,
  login,
  registerDoctor,
  registerAdmin,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/register-doctor", registerDoctor);
router.post("/register-admin", registerAdmin);

export default router;
