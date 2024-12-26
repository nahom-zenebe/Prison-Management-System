import mongoose from "mongoose";


mongoose
  .connect("mongodb://localhost:27017/Prison-Management-System")
  .then((result) => {
    console.log("Connected to Attendance DataBase");
  })
  .catch((err) => {
    console.log("Error while connecting to Attendance DataBase", err);
  });

const MedicalSchema=mongoose.Schema({

    recordId:{
        type:Number,
        required:true,
        unique:true
    },
    inmateId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Inmate',
      required:true,


      
        

    },
    diagnosis:{
      type:String,
      required:true,
    

    },
    treatment:{
      type:String,
      required:true,


    },
    recordData:{
        type:Date,
        required:true

    }


})
const Medical=mongoose.model("Medical", MedicalSchema)
export default Medical;