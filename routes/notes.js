// Route to retrieve notes
app.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "db.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Error reading notes." });
    }
    res.json(JSON.parse(data));
  });
});

// Route to save a new note
app.post("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "db.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Error reading notes." });
    }
    const notes = JSON.parse(data);
    const newNote = req.body;
    newNote.id = uuidv4(); // Assign unique id using uuid
    notes.push(newNote);

    fs.writeFile(
      path.join(__dirname, "db.json"),
      JSON.stringify(notes),
      (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Error writing notes." });
        }
        res.json(newNote);
      }
    );
  });
});
