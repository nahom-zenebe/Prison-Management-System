import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/Prison-Management-System")
  .then((result) => {
    console.log("Connected To Inmate DataBase");
  })
  .catch((err) => {
    console.log("Error While Connected to DB", err);
  });

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
  status:{
    type:String,
    value:["pending","Accepted","Rejected"],
    defult:"pending"
  }
});

const  Visitation = mongoose.model("Inmate", Visitationschema );

export default Visitation;
