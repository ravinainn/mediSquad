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
