const express = require("express");
const router = express.Router();

// POST route for /submitRequest
router.post("/submitRequest", (req, res) => {
  const requestData = req.body;
  console.log("Request received:", requestData);
  res.status(200).json({ message: "Request submitted successfully!" });
});

module.exports = router;

