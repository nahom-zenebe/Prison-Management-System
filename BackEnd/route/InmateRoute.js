import express from "express";
import {
  addInmate,
  searchInmate,
  getInmates,
  updateInmate,
} from "../controller/InmateManagement.js";

const router = express.Router();

router.post("/inmateM/addInmate", addInmate);
router.get("/inmateM/searchInmate", searchInmate);
router.get("/inmateM/getInmates", getInmates);
router.put("/inmateM/updateInmate", updateInmate);

export default router;
