const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the public directory
app.use(express.static("public"));

// Route to serve the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Route to serve the notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// // Route to retrieve notes
// app.get("/api/notes", (req, res) => {
//   fs.readFile(path.join(__dirname, "db.json"), "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json({ error: "Error reading notes." });
//     }
//     res.json(JSON.parse(data));
//   });
// });

// // Route to save a new note
// app.post("/api/notes", (req, res) => {
//   fs.readFile(path.join(__dirname, "db.json"), "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json({ error: "Error reading notes." });
//     }
//     const notes = JSON.parse(data);
//     const newNote = req.body;
//     newNote.id = uuidv4(); // Assign unique id using uuid
//     notes.push(newNote);

//     fs.writeFile(
//       path.join(__dirname, "db.json"),
//       JSON.stringify(notes),
//       (err) => {
//         if (err) {
//           console.log(err);
//           return res.status(500).json({ error: "Error writing notes." });
//         }
//         res.json(newNote);
//       }
//     );
//   });
// });

// Catch-all route to return index.html if no other route is matched (must be last)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
