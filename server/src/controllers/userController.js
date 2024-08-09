import User from "../models/User.js";
import Consultation from "../models/Consultation.js";

export const applyForConsultation = async (req, res) => {
  try {
    const { doctorId, date } = req.body;
    const consultation = await Consultation.create({
      patient: req.user._id,
      doctor: doctorId,
      date,
    });
    res.status(201).json(consultation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPatientRecords = async (req, res) => {
  try {
    const consultations = await Consultation.find({ patient: req.user._id })
      .populate("doctor", "name")
      .populate("prescription");
    res.json(consultations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
