import express from "express";
import { protect } from "../middleware/auth.js";
import { authorize } from "../middleware/roles.js";
import {
  getWaitingList,
  acceptConsultation,
  writePrescription,
} from "../controllers/doctorController.js";

const router = express.Router();

router.use(protect); // All routes in this file require authentication
router.use(authorize("doctor")); // All routes in this file are for doctors only

router.get("/waiting-list", getWaitingList);
router.put("/accept-consultation/:consultationId", acceptConsultation);
router.post("/write-prescription/:consultationId", writePrescription);

export default router;
