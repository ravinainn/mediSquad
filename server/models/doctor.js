import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  qualifications: [
    {
      degree: String,
      institution: String,
      year: Number,
    },
  ],
  experience: {
    type: Number,
    // required: true,
  },
  licenseNumber: {
    type: String,
    required: true,
    unique: true,
  },
  active: {
    type: Boolean,

    default: false,
  },
  patient: {
    type: Number,
    default: 0,
  },
});
DoctorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
DoctorSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};
const Doctor = mongoose.model("Doctor", DoctorSchema);

export default Doctor;
