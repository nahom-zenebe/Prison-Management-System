import express from "express";
import authRouter from "./route/authRoute.js";
import inmateRouter from "./route/InmateRoute.js";

const app = express();
app.use(express.json());

app.use("/", authRouter);
app.use("/", inmateRouter);

// server listener
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error whie loading server", err);
    return;
  }
  console.log(`server is live at port ${PORT}...`);
});
