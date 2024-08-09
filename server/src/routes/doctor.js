import express from "express";
import { doctorRegister } from "../controllers/authController";

const router = express.Router();

router.post("/regiter", doctorRegister);
router.post("/login");

export default router;
