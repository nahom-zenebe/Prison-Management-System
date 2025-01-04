import express from "express";
import { login, logout, signup } from "../controller/authController.js";

const router = express.Router();

router.post("/auth/login", login);
router.post("/auth/signup", signup);
router.post("/auth/logout", logout);

export default router;
