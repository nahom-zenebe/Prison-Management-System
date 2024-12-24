import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/Prison-Management-System")
  .then((result) => {
    console.log("Connected To UserBase");
  })
  .catch((err) => {
    console.log("Error While Connected to DB", err);
  });

const schema = mongoose.Schema({
  Fullname: {
    type: String,
    required: true,
  },

  Username: {
    type: String,
    required: true,
  },

  Email: {
    type: String,
    required: true,
  },

  Password: {
    type: String,
    required: true,
  },

  Role: {
    type: String,
    required: true,
  },

  salary: {
    type: Number,
    required: false,
  },
});

const model = mongoose.model("users", schema);

export default model;
