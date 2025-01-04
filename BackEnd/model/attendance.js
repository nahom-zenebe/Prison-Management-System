import mongoose from "mongoose";

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
