import mongoose from "mongoose";

const schema = mongoose.Schema({
  Fullname: {
    type: String,
    required: true,
  },

  Username: {
    type: String,
    required: true,
    unique: true,
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
