import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error while connecting to Attendance DataBase", err.message);
  }
};

export default connectToMongoDB;
