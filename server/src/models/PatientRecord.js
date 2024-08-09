import mongoose from "mongoose";

const patientRecordSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  consultation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Consultation",
    required: true,
  },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const PatientRecord = mongoose.model("PatientRecord", patientRecordSchema);

export default PatientRecord;
