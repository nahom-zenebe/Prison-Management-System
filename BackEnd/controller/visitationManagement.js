import InmateDB from "../model/Inmate.js";
import Visitation from "../model/visitationRecord.js";

export const requestVisit = async (req, res) => {
  try {
    const inmateId = req.body;
    const inmate = InmateDB.findOne(inmateId);

    if (!inmate) {
      return res.status(402).json({ status: "Inmate not found" });
    }

    return res.status(200).json({ status: "Inmate found" });
  } catch (err) {
    res.status(501).send("Internal Server Error");
    console.log("Error during visitor request visit", err);
  }
};

export const addVisitation = async (req, res) => {
  try {
    const { visitorId, inmateId, name, visitDate } = req.body;

    if (!visitorId || !inmateId || !name || !visitDate) {
      return res
        .status(404)
        .json({ message: "The data field should be provided" });
    }
    const newvisitation = new Visitation({
      visitorId,
      inmateId,
      name,
      visitDate,
    });
    await newvisitation.save();
    res.status(201).json({ message: "The visitation added successfully" });
  } catch (error) {
    console.log("error in adding visitation: ", error);
    return res.status(404).json({ message: "Error in adding visitation" });
  }
};

export const getVisitRecord = async (req, res) => {
  try {
    const { visitorid } = req.body;

    const visitations = await Visitation.findById({ visitorid });

    if (!visitations) {
      return res.status(404).json({ message: "Visitation not found" });
    }

    res
      .status(200)
      .json({ message: "Visitation fetched successfully", data: visitations });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in fetching visitation", error: error.message });
  }
};

export const allvisition = async (req, res) => {
  try {
    const allvisition = await Visitation.find({});
    if (!allvisition) {
      return res.status(404).json({ message: "there is not visitation found" });
    }
    res.status(200).json({
      message: " all Visitation fetched successfully",
      data: allvisition,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in fetching  all visitation",
      error: error.message,
    });
  }
};

export const respondToInvitation = async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res
        .status(400)
        .json({ message: "Please provide a status to update" });
    }

    const updatedVisitation = await Visitation.findOneAndUpdate(
      { visitorId },
      { status },
      { new: true }
    );

    if (!updatedVisitation) {
      return res.status(404).json({ message: "No visitation found to update" });
    }

    res.status(200).json({
      message: "Status updated successfully",
      data: updatedVisitation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in responding to invitation",
      error: error.message,
    });
  }
};

export const getVisitationCount = async (req, res) => {
  try {
    const count = await Visitation.countDocuments();

    res
      .status(200)
      .json({ message: "Total visitation count retrieved", count });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving visitation count",
      error: error.message,
    });
  }
};
