// backend/routes/admin.js
const express = require("express");
const router = express.Router();
const { getRequests, approveRequest } = require("../controllers/adminController");
const protect = require("../middleware/authMiddleware");

// Admin routes
router.get("/getRequests", protect, getRequests);  // Protect the route
router.post("/approveRequest", protect, approveRequest);  // Protect the route

module.exports = router;
