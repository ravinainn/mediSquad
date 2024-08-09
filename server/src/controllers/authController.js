import Doctor from "../models/Doctor";

export const doctorRegister = async (req, res) => {
  try {
    const { name, email, password, speciality, licenseNumber, passKey } =
      req.body;
    if (passKey !== process.env.DOCTOR_PASSKEY) {
      return res.status(401).json({ message: "Invalid passkey." });
    }
    const doctor = await Doctor.create({
      name,
      email,
      password,
      speciality,
      licenseNumber,
    });
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
