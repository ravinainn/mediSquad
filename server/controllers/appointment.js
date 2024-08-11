import Appointment from "../models/appointment.js";
import Doctor from "../models/doctor.js";
import { createRoom } from "../services/dailyCo.js";
import { createPayment } from "../services/squarePayment.js";

export const createAppointment = async (req, res) => {
  try {
    const { name, age, gender, contact, aadharNumber, speciality } = req.body;
    const createdBy = req.user._id;

    let appointment = await Appointment.create({
      patient: { name, age, gender, contact, aadharNumber },
      createdBy,
      speciality,
    });

    // Allocating doctor.
    let doctor = await Doctor.findOne({
      speciality: speciality,
      acitve: true,
    });
    if (!doctor) {
      doctor = await Doctor.findOne({
        active: true,
      });
    }
    if (!doctor) {
      doctor = await Doctor.findOne();
    }
    if (!doctor) {
      res.status(404).json({ message: "Doctor is not available." });
    }
    doctor = await Doctor.findByIdAndUpdate(
      doctor._id,
      { $inc: { patient: 1 } },
      { new: true }
    );

    // Creating room
    const roomUrl = await createRoom();
    if (!roomUrl) res.status(404).json({ message: "Failed to create Room." });
    appointment = await Appointment.findByIdAndUpdate(
      appointment._id,
      { doctor: doctor._id, dailyRoomName: roomUrl },
      { new: true }
    );

    res.status(201).json({
      roomUrl: roomUrl,
      doctorName: doctor.name,
      patientCount: doctor.patient,
      appointmentId: appointment._id,
    });
  } catch (error) {
    console.log(error);
  }
};

// Payment of Appointment
export const paymentHandler = async (req, res) => {
  try {
    const { appointmentId, sourceId } = req.body;
    // console.log(appointmentId);
    const result = await createPayment(1000, "USD", sourceId);
    const appointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      {
        paymentStatus: "paid",
        status: "active",
      },
      { new: true }
    );
    const serializedResult = JSON.parse(
      JSON.stringify(result, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );

    res.json({
      message: "Payment processed successfully",
      result: serializedResult,
      roomUrl: appointment.dailyRoomName,
    });
  } catch (error) {
    console.error("Payment processing error:", error);
    res.status(500).json({
      message: "Error processing payment",
      error: error.message,
      details: error.result
        ? JSON.parse(
            JSON.stringify(error.result.errors, (key, value) =>
              typeof value === "bigint" ? value.toString() : value
            )
          )
        : null,
    });
  }
};

export const endAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const appointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { status: "completed" },
      { new: true }
    );
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
