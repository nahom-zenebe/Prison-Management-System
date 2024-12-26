import InmateDB from "../model/Inmate.js";

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
