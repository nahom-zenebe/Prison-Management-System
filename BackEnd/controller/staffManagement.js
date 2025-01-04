import Staff from '../model/staff.js'
import Inmate from "../model/Inmate.js" 



export const createStaffProfile = async (req, res) => {
  try {
    const { StaffId, username, contactinfo, salary } = req.body;

    if (!StaffId || !username || !contactinfo || !salary) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const duplicateId = await Staff.findOne({ StaffId });
    if (duplicateId) {
      return res.status(401).send("Staff Id already exits");
    }

    const newStaff = new Staff({ StaffId, username, contactinfo, salary });
    const savedStaff = await newStaff.save();

    res.status(201).json({
      message: "Staff profile created successfully",
      data: savedStaff,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating staff profile",
      error: error.message,
    });
  }
};






export const getAllInmates = async (req, res) => {
  try {
    const inmates = await Inmate.find();
    if (!inmates || inmates.length === 0) {
      return res.status(404).json({ message: "No inmates found" });
    }

    res.status(200).json({
      message: "Inmates fetched successfully",
      data: inmates,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching inmates",
      error: error.message,
    });
  }
};


export const getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    if (!staff || staff.length === 0) {
      return res.status(404).json({ message: "No staff found" });
    }

    res.status(200).json({
      message: "Staff fetched successfully",
      data: staff,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching staff",
      error: error.message,
    });
  }
};
