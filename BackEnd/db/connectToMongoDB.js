import mongoose from "mongoose";

const connectToMongoDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MongoDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to MongoDB");
  } catch (err) {
    console.error(" Error while connecting to Attendance DataBase:", err.message);
  }
};

export default connectToMongoDB;
