import express from "express";
import { protect } from "../middleware/auth.js";
import { authorize } from "../middleware/roles.js";
import {
  getAllDoctors,
  getAllPatients,
  getPatientsUnderDoctor,
} from "../controllers/adminController.js";

const router = express.Router();

router.use(protect); // All routes in this file require authentication
router.use(authorize("admin")); // All routes in this file are for admins only

router.get("/doctors", getAllDoctors);
router.get("/patients", getAllPatients);
router.get("/patients-under-doctor/:doctorId", getPatientsUnderDoctor);

export default router;
