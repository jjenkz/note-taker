const express = require("express");
const path = require("path");
const htmlRoute = require("./routes/html.js");
const apiRoute = require("./routes/api.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the public directory
app.use(express.static("public"));

//Routes connected to the api/notes and html page
app.use("/", htmlRoute);
app.use("/api/notes", apiRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
