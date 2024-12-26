import mongoose from "mongoose";

const schema = mongoose.Schema({
  inmateId: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  crime: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  cell: {
    type: Number,
    required: true,
  },

  medicalRecord: {
    type: String,
    required: true,
  },

  sentenceDuration: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("Inmate", schema);

export default model;
