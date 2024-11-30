// backend/controllers/adminController.js
const Request = require("../models/Request");

exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.find({ status: "pending" });
    res.json(requests);
  } catch (error) {
    console.error("Error fetching requests", error);
    res.status(500).json({ message: "Error fetching requests" });
  }
};

exports.approveRequest = async (req, res) => {
  const { id, status } = req.body;
  try {
    const request = await Request.findById(id);
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }
    
    // Update the status of the request
    request.status = status;
    await request.save();

    res.json({ message: `Request ${status} successfully` });
  } catch (error) {
    console.error("Error approving request", error);
    res.status(500).json({ message: "Error approving request" });
  }
};
