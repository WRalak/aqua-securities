const express = require('express');
const router = express.Router();
const Request = require('../models/request'); // MongoDB model

router.get('/getRequests', async (req, res) => {
  try {
    const requests = await Request.find();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching requests', error });
  }
});

module.exports = router;


