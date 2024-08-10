import mongoose, { model, Schema } from "mongoose";

const Patient = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  contact: { type: Number, required: true },
  aadharNumber: { type: Number, required: true },
});

const AppSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  patient: {
    type: Patient,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["pending", "active", "completed", "cancelled"],
    default: "pending",
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "paid"],
    default: "pending",
  },
  dailyRoomName: {
    type: String,
  },
  prescription: {
    type: String,
  },
});

const Appointment = mongoose.model("Appointment", AppSchema);
export default Appointment;
