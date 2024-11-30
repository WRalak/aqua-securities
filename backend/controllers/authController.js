// backend/controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Admin login successful
    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in", error);
    res.status(500).json({ message: "Error logging in" });
  }
};
