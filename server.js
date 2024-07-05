const express = require("express");
const htmlRoute = require("./routes/htmlRoute");
const apiRoute = require("./routes/apiRoute");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static("public"));

//Routes connected to the api/notes and html page
app.use("/api/notes", apiRoute);
app.use("/", htmlRoute);

// Start the server
app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
