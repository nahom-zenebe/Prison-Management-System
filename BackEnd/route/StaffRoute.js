import express from "express";
import {createStaffProfile ,getAllInmates ,getAllStaff} from "../controller/staffManagement.js";

const router = express.Router();

router.post("/staff/create", createStaffProfile);
router.get("/staff/all", getAllStaff);
router.get("/inmate/all", getAllInmates);

export default router;