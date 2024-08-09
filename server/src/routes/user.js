import express from "express";

import {
  applyForConsultation,
  getPatientRecords,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/consultation", applyForConsultation);
router.get("/patients", getPatientRecords);

export default router;
