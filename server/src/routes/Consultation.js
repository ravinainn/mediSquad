import express from "express";
import { protect } from "../middleware/auth.js";
import {
  createConsultation,
  startConsultation,
  endConsultation,
  getChatMessages,
  processPayment,
} from "../controllers/consultationController.js";

const router = express.Router();

router.post("/", protect, createConsultation);
router.post("/:consultationId/start", protect, startConsultation);
router.post("/:consultationId/end", protect, endConsultation);
router.get("/:consultationId/messages", protect, getChatMessages);
router.post("/payment", protect, processPayment);

export default router;

// import express from "express";
// import { protect } from "../middleware/auth.js";
// import { createDailyRoom } from "../services/dailyService.js";
// import { createPayment } from "../services/squareService.js";
// import Consultation from "../models/Consultation.js";

// const router = express.Router();

// router.use(protect); // All routes in this file require authentication

// // Create a new consultation session
// router.post("/create", async (req, res) => {
//   try {
//     const { doctorId, date } = req.body;
//     const roomName = await createDailyRoom();
//     const consultation = await Consultation.create({
//       patient: req.user._id,
//       doctor: doctorId,
//       date,
//       dailyRoomName: roomName,
//     });
//     res.status(201).json(consultation);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Process payment for consultation
// router.post("/payment", async (req, res) => {
//   try {
//     const { consultationId, amount, currency, sourceId } = req.body;
//     const payment = await createPayment(amount, currency, sourceId);
//     await Consultation.findByIdAndUpdate(consultationId, {
//       paymentStatus: "paid",
//     });
//     res.json({ message: "Payment processed successfully", payment });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Get consultation details
// router.get("/:id", async (req, res) => {
//   try {
//     const consultation = await Consultation.findById(req.params.id)
//       .populate("patient", "name")
//       .populate("doctor", "name")
//       .populate("prescription");
//     if (!consultation) {
//       return res.status(404).json({ message: "Consultation not found" });
//     }
//     res.json(consultation);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// export default router;
