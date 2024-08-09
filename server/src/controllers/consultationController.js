import Consultation from "../models/Consultation.js";
import ChatMessage from "../models/ChatMessage.js";
import {
  createDailyRoom,
  getDailyRoomToken,
} from "../services/dailyService.js";
import { createPayment } from "../services/squareService.js";

export const createConsultation = async (req, res) => {
  try {
    const { name, age, gender, contact, aadhaarNumber, doctorSpeciality } =
      req.body;
    const createdBy = req.user._id;
    const consultation = await Consultation.create({
      patient: { name, age, gender, contact, aadhaarNumber },
      createdBy,
      doctorSpeciality,
    });
  } catch (error) {}
};

export const startConsultation = async (req, res) => {
  try {
    const { consultationId } = req.params;
    const consultation = await Consultation.findById(consultationId);

    if (!consultation) {
      return res.status(404).json({ message: "Consultation not found" });
    }

    if (consultation.status !== "pending") {
      return res
        .status(400)
        .json({ message: "Consultation cannot be started" });
    }

    const isDoctor = req.user._id.toString() === consultation.doctor.toString();
    const token = await getDailyRoomToken(consultation.dailyRoomName, isDoctor);

    consultation.status = "active";
    await consultation.save();

    res.json({ consultation, dailyToken: token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const endConsultation = async (req, res) => {
  try {
    const { consultationId } = req.params;
    const consultation = await Consultation.findByIdAndUpdate(
      consultationId,
      { status: "completed" },
      { new: true }
    );
    res.json(consultation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getChatMessages = async (req, res) => {
  try {
    const { consultationId } = req.params;
    const messages = await ChatMessage.find({ consultation: consultationId })
      .sort("timestamp")
      .populate("sender", "name");
    res.json(messages);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const processPayment = async (req, res) => {
  try {
    const { consultationId, sourceId, amount, currency } = req.body;
    const payment = await createPayment(amount, currency, sourceId);
    await Consultation.findByIdAndUpdate(consultationId, {
      paymentStatus: "paid",
    });
    res.json({ message: "Payment processed successfully", payment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
