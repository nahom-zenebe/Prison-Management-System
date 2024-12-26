import express from "express";
import authRouter from "./route/authRoute.js";
import inmateRouter from "./route/InmateRoute.js";
<<<<<<< HEAD
import connectToMongoDB from "./db/connectToMongoDb.js";
import dotenv from "dotenv";
dotenv.config();
=======
import VisitationRouter from "./model/visitationRecord.js";
>>>>>>> 837877d0046c41abe9e072f0bf8364ea501c880a

const app = express();
app.use(express.json());

app.use("/", authRouter);
app.use("/", inmateRouter);
app.use("/Visitation",VisitationRouter)

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
