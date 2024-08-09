import Consultation from "../models/Consultation.js";
import PatientRecord from "../models/PatientRecord.js";
import Prescription from "../models/Prescription.js";
import { generatePdf } from "../services/pdfService.js";

export const getWaitingList = async (req, res) => {
  try {
    const waitingList = await Consultation.find({
      doctor: req.user._id,
      status: "pending",
    }).populate("patient", "name");
    res.json(waitingList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const acceptConsultation = async (req, res) => {
  try {
    const { consultationId } = req.params;
    const consultation = await Consultation.findByIdAndUpdate(
      consultationId,
      { status: "accepted" },
      { new: true }
    );
    res.json(consultation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const writePrescription = async (req, res) => {
  try {
    const { consultationId } = req.params;
    const { medications, instructions } = req.body;

    const prescription = await Prescription.create({
      consultation: consultationId,
      medications,
      instructions,
    });

    const pdfBuffer = await generatePdf(prescription);
    const pdfUrl = `prescriptions/${consultationId}.pdf`; // Save PDF and get URL
    prescription.pdfUrl = pdfUrl;
    await prescription.save();

    await Consultation.findByIdAndUpdate(consultationId, {
      prescription: prescription._id,
    });

    res.json(prescription);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
