import mongoose from "mongoose";
// nahoms commit
mongoose
  .connect("mongodb://localhost:27017/Prison-Management-System")
  .then((result) => {
    console.log("Connected to Attendance DataBase");
  })
  .catch((err) => {
    console.log("Error while connecting to Attendance DataBase", err);
  });

const attendanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  loginTime: {
    type: Date,
    Default: Date.now(),
  },
  logoutTime: {
    type: Date,
  },
  duration: {
    type: Number,
  },
});

export default mongoose.model("attendance", attendanceSchema);
