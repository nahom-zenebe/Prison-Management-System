import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/Prison-Management-System")
  .then((result) => {
    console.log("Connected To Inmate DataBase");
  })
  .catch((err) => {
    console.log("Error While Connected to DB", err);
  });

const schema = mongoose.Schema({
  visitorId: {
    type: Number,
    required: true,
  },

  inmateId: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  visitDate: {
    type: Number,
    required: true,
  },
});

const model = mongoose.model("Inmate", schema);

export default model;
