const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  fullName: String,
  admissionNumber: String,
  date: String,
  time: String,
});

module.exports = mongoose.model('Request', requestSchema);

