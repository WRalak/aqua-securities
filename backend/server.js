
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const submitRoutes = require("./routes/submitRoutes"); // Ensure path is correct

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON data
app.use(bodyParser.urlencoded({ extended: true }));

// Mount the routes under /api
app.use("/api", submitRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});





