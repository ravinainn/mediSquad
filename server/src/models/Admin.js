import mongoose from "mongoose";
import User from "./User";

const adminSchema = new mongoose.Schema({});

const Admin = User.discriminator("Admin", adminSchema);

export default Admin;
