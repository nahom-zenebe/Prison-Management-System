import mongoose from "mongoose";


mongoose
  .connect("mongodb://localhost:27017/Prison-Management-System")
  .then((result) => {
    console.log("Connected to Attendance DataBase");
  })
  .catch((err) => {
    console.log("Error while connecting to Attendance DataBase", err);
  });

const staffSchema=mongoose.Schema({

    StaffId:{
        type:Number,
        required:true,
        unique:true
    },
    username:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'user',
      required:true
        

    },
    contactinfo:{
      type:String,
      required:true,
    

    },
    salary:{
      type:Number,
      required:true,


    }


})
const Staff=mongoose.model("staff", staffSchema)
export default Staff;