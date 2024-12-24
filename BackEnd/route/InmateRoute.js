import express from "express";
import {
  addInmate,
  searchInmate,
  getInmates,
} from "../controller/InmateManagement.js";

const router = express.Router();

router.post("/inmateM/addInmate", addInmate);
router.get("/inmateM/searchInmate", searchInmate);
router.get("/inmateM/getInmates", getInmates);

export default router;
