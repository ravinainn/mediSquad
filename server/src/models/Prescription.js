import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema({
  consultation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Consultation",
    required: true,
  },
  medications: [
    {
      name: String,
      dosage: String,
      frequency: String,
    },
  ],
  instructions: String,
  pdfUrl: String,
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);

export default Prescription;
