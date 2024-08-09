import Doctor from "../models/Doctor.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await User.create({ name, email, password, role });
    const token = signToken(user._id);
    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
    const token = signToken(user._id);
    res.json({
      token,
      user: { user },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const registerDoctor = async (req, res) => {
  try {
    const { name, email, password, currentHospital, degrees, specialty, role } =
      req.body;
    const user = await Doctor.create({
      name,
      email,
      password,
      currentHospital,
      degrees,
      specialty,
      role,
    });
    const token = signToken(user._id);
    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        currentHospital: user.currentHospital,
        degrees: user.degrees,
        specialty: user.specialty,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
  } catch (error) {}
};
