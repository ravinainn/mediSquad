import User from "../models/User.js";
import Consultation from "../models/Consultation.js";

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ role: "doctor" });
    res.json(doctors);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllPatients = async (req, res) => {
  try {
    const patients = await User.find({ role: "user" });
    res.json(patients);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPatientsUnderDoctor = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const consultations = await Consultation.find({
      doctor: doctorId,
    }).populate("patient", "name email");
    const patients = consultations.map((c) => c.patient);
    res.json(patients);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
