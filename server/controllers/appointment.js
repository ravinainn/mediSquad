import Appointment from "../models/appointment.js";
import Doctor from "../models/doctor.js";
import { createRoom } from "../services/dailyCo.js";

export const createAppointment = async (req, res) => {
  try {
    const { name, age, gender, contact, aadharNumber, speciality } = req.body;
    const createdBy = req.user._id;

    const appointment = await Appointment.create({
      patient: { name, age, gender, contact, aadharNumber },
      createdBy,
      speciality,
    });
    const roomUrl = await createRoom();
    appointment.dailyRoomName = roomUrl;
    const doctor = await Doctor.findOne({
      speciality: speciality,
      acitve: true,
    });

    res.status(201).json({ roomUrl: roomUrl });
  } catch (error) {
    console.log(error);
  }
};
