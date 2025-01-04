import express from "express";
import {addVisitation,getVisitRecord,respondToInvitation,getVisitationCount,allvisition } from "../controller/visitationManagement.js";

const router = express.Router();

router.post("/addVisition", addVisitation);
router.get("/getVisitation/:visitorid",getVisitRecord);
router.put("/updatestatus", respondToInvitation);
router.get("/getnumbervisitation", getVisitationCount);
router.get("/allvisitation", allvisition);



export default router;
