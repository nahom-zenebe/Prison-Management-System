import InmateDB from "../model/Inmate.js";


export const addInmate = async (req, res) => {
  try {
    const {
      inmateId,
      name,
      age,
      crime,
      gender,
      cell,
      medicalRecord,
      sentenceDuration,
      status,
    } = req.body;

    const duplicateId = await InmateDB.findOne({ inmateId });
    if (duplicateId) {
      return res.status(401).send("Inmate Id already exits");
    }
    const inmate = new InmateDB({
      inmateId: inmateId,
      name: name,
      age: age,
      crime: crime,
      gender: gender,
      cell: cell,
      medicalRecord: medicalRecord,
      sentenceDuration: sentenceDuration,
      status: status,
    });
    await inmate.save();
    return res.status(201).json({ status: "Successful" });
  } catch (err) {
    console.log("Error while adding Inmate", err);
  }
};


export const searchInmate = async (req, res) => {
  try {
    const inmateId = req.body.inmateId;
    const inmate = await InmateDB.findOne({ inmateId });

    if (inmate) {
      return res.status(200).json(inmate);
    }

    return res.status(401).json({ status: "Inmate not found" });
  } catch (err) {
    console.log("Error while searching for an inmate", err);
  }
};


export const getInmates = async (req, res) => {
  try {
    const inmates = await InmateDB.find({});
    if (inmates) {
      return res.status(200).json(inmates);
    }

    return res.status(401).json({ status: "No inmates found" });
  } catch (err) {
    console.log("Error while getting All Inmates", err);
  }
};


export const updateInmate = async (req, res) => {
  try {
    const { inmateId, ...updateData } = req.body;

    if (!inmateId) {
      return res.status(400).json({ status: "Inmate ID is required." });
    }

    const updatedInmate = await InmateDB.findOneAndUpdate(
      { inmateId },
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedInmate) {
      return res.status(404).json({ status: "Inmate not found." });
    }

    res
      .status(200)
      .json({ status: "Inmate updated successfully.", data: updatedInmate });
  } catch (error) {
    console.error("Error while updating inmate data:", error);
    res.status(500).json({ status: "Error updating inmate data." });
  }
};
