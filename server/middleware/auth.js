import jwt from "jsonwebtoken";
import Doctor from "../models/doctor.js";
import User from "../models/user.js";

export const doctorProtected = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.doctor = await Doctor.findById(decoded.id).select("-password");

      return next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed." });
    }
  }
  if (!token) {
    res.status(401).json({ message: "Not authorized, no token." });
  }
};

export const userProtected = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      return next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed." });
    }
  }
  if (!token) {
    res.status(401).json({ message: "Not authorized, no token." });
  }
};
