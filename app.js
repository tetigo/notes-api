import express from "express";
import notesRouter from "./routes/notes.routes.js";

const app = express();
app.use(express.json()); 

app.use("/api", notesRouter); 

app.get("/", (req, res) => {
  res.send("<h1>Notes API Running</h1><p>Use /api/notes endpoints</p>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
