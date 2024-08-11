import Appointment from "../models/appointment.js";

export const getDoctorPatients = async (req, res) => {
  try {
    const doctor = req.doctor._id;
    const data = await Appointment.find({ doctor: doctor, status: "active" });
    res.status(201).json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
