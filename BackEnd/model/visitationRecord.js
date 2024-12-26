import mongoose from "mongoose";

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
