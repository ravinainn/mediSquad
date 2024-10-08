import Doctor from "../models/doctor.js";
import User from "../models/user.js";
import { signToken } from "../services/auth.js";

export const doctorRegister = async (req, res) => {
  try {
    const { name, email, password, speciality, licenseNumber, passKey } =
      req.body;
    if (passKey !== "1234") {
      return res.status(401).json({ message: "Invalid passkey." });
    }
    const existingEmail = await Doctor.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Check if licenseNumber already exists
    const existingLicense = await Doctor.findOne({ licenseNumber });
    if (existingLicense) {
      return res
        .status(400)
        .json({ message: "License number already registered." });
    }
    const doctor = await Doctor.create({
      name,
      email,
      password,
      speciality,
      licenseNumber,
    });
    console.log(doctor._id);
    const token = signToken(doctor._id);
    res.status(201).json({
      token,
      id: doctor._id,
      name: doctor.name,
      email: doctor.email,
      speciality: doctor.speciality,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const DoctorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(404).json({ message: "Invalid Credentials." });
    }
    await Doctor.findByIdAndUpdate(doctor._id, { active: true });
    const isMatch = await doctor.comparePassword(password);
    if (!isMatch) {
      return res.status(404).json({ message: "Invalid Credentials." });
    }

    const token = signToken(doctor._id);
    res.status(200).json({
      token,
      id: doctor._id,
      name: doctor.name,
      email: doctor.email,
      speciality: doctor.speciality,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const doctorLogout = async (req, res) => {
  try {
    // Assuming the doctor's ID is available in the req.user object after authentication
    const doctorId = req.doctor._id;

    // Find the doctor by ID and update the status to 'inactive'
    const doctor = await Doctor.findByIdAndUpdate(
      doctorId,
      { active: false },
      { new: true }
    );

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res
      .status(200)
      .json({ message: "Logged out successfully", status: doctor.active });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// USER AUTH
export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });
    const token = signToken(user._id);
    res.status(201).json({
      token,
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid Credentials." });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(404).json({ message: "Invalid Credentials." });
    }
    const token = signToken(user._id);
    res.status(200).json({
      token,
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const userLogout = async (req, res) => {
  try {
    // Assuming the doctor's ID is available in the req.user object after authentication
    const userId = req.user._id;

    // Find the doctor by ID and update the status to 'inactive'
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    res
      .status(200)
      .json({ message: "Logged out successfully", status: user.status });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
