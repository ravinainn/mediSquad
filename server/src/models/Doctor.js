import mongoose from "mongoose";
import User from "./User.js";

const doctorSchema = new mongoose.Schema({
  currentHospital: { type: String, required: true },
  degrees: { type: [String], required: true },
  specialty: { type: String, required: true },
  validated: { type: Boolean, default: true },
});

const Doctor = User.discriminator("Doctor", doctorSchema);

export default Doctor;
