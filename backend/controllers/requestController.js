// backend/controllers/requestController.js
const Request = require("../models/Request");

exports.submitRequest = async (req, res) => {
  const { fullName, admissionNumber, identification, residency, carDetails, department, reason, dateTime } = req.body;
  
  try {
    const newRequest = new Request({
      fullName,
      admissionNumber,
      identification,
      residency,
      carDetails,
      department,
      reason,
      dateTime,
    });
    
    await newRequest.save();
    res.status(201).json({ message: "Request submitted successfully" });
  } catch (error) {
    console.error("Error submitting request", error);
    res.status(500).json({ message: "Error submitting request" });
  }
};
