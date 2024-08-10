import express from "express";
import { userLogin, userRegister } from "../controllers/authController.js";
import { userProtected } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/test", userProtected, (req, res) => {
  res.status(200).json({
    message: `Welcome ${req.user.name}, this is your user dashboard.`,
  });
});

export default router;
