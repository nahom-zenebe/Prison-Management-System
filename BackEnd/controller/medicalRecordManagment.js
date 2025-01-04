import Medical from "../model/medical.js"


export const AddMedicalRecord=async(req,res)=>{
    try {

        const {recordId, inmateId,diagnosis,treatment,recordData}=req.body

        if (!recordId || !inmateId || !diagnosis || !treatment || !recordData) {
            return res.status(400).json({ message: "All fields are required" });
          }
         

          res.status(201).json({
            message: "Medical record added successfully",
            data: savedRecord,
          });

          const newMedicalRecord = new  Medical({
            recordId,
            inmateId,
            diagnosis,
            treatment,
            recordData,
          });
          const savedRecord = await  Medical.save();

    } catch (error) {
        res.status(500).json({
      message: "Error in adding medical record",
      error: error.message,
    });
    }
    
}

export const AllMedicalRecord=async(req,res)=>{

    try {
        const allmedicaldata=await  Medical.find({})
        if(!allmedicaldata){
            return res.status(400).json({ message: "no Medical record found" });
        }

        if (!allmedicaldata || allmedicaldata.length === 0) {
            return res.status(404).json({ message: "No medical records found" });
          }
      
          
          res.status(200).json({message: "Medical records fetched successfully",data: allmedicaldata,
          });
        } catch (error) {
   
          res.status(500).json({message: "Error in fetching medical records",error: error.message,
          });

}}


export const getMedicalRecordById = async (req, res) => {
    try {
      const { Medicalid } = req.params; 
  
      
      const medicalRecord = await  Medical.findById(Medicalid);
  
     
      if (!medicalRecord) {
        return res.status(404).json({ message: "Medical record not found" });
      }
  
  
      res.status(200).json({message: "Medical record fetched successfully",data: medicalRecord,
      });
    } catch (error) {
   
      res.status(500).json({ message: "Error in fetching medical record", error: error.message,
      });
    }
  };