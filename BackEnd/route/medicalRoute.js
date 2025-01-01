import express from "express";
import {AddMedicalRecord,AllMedicalRecord,getMedicalRecordById} from "../controller/medicalRecordManagment.js";

const router = express.Router();

router.post("/addMedicalRecord", AddMedicalRecord);
router.get("/getAllMedicalRecord",AllMedicalRecord);
router.put("/getsingleMedicalrecord/:Medicalid", getMedicalRecordById);



export default router;
