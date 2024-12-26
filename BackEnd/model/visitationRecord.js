import mongoose from "mongoose";

const Visitationschema = mongoose.Schema({
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
  status: {
    type: String,
    value: ["pending", "Accepted", "Rejected"],
    defult: "pending",
  },
});

const Visitation = mongoose.model("Inmate", Visitationschema);

export default Visitation;
