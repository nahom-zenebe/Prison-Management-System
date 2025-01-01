import express from "express";
import authRouter from "./route/authRoute.js";
import inmateRouter from "./route/InmateRoute.js";
import VisitationRouter from './route/visitaionRoute.js'
import MedicalRouter from "./route/medicalRoute.js";
import connectToMongoDB from "./db/connectToMongoDb.js";
import StaffRoute from './route/StaffRoute.js'
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/", authRouter);
app.use("/", inmateRouter);
app.use("/Visitation",VisitationRouter)
app.use('/Medical',MedicalRouter)
app.use('/StaffRoute',StaffRoute)

// server listener
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error whie loading server", err);
    return;
  }
  connectToMongoDB();
  console.log(`server is live at port ${PORT}...`);
});
