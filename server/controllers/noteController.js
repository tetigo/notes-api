const service = require("../models/Note");

export const getAllNotes = (req, res) => {
  const notes = service.getAllNotesService();
  console.log("GET /notes - All notes:", notes);
  res.json(notes);
};

export const getNoteById = (req, res) => {
  const id = parseInt(req.params.id);
  const note = service.getNoteByIdService(id);
  if (!note) return res.status(404).json({ error: "Note not found" });
  console.log(`GET /notes/${req.params.id} - Note:`, note);
  res.json(note);
};

export const createNote = (req, res) => {
  const { title, content } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });
  const note = service.createNoteService({ title, content });
  console.log("POST /notes - Created note:", note); // 
  res.status(201).json(note);
};

export const updateNote = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const note = service.updateNoteService(id, { title, content });
  if (!note) return res.status(404).json({ error: "Note not found" });
  console.log(`PUT /notes/${req.params.id} - Updated note:`, note);
  res.json(note);
};

export const deleteNote = (req, res) => {
  const id = parseInt(req.params.id);
  const success = service.deleteNoteService(id);
  if (!success) return res.status(404).json({ error: "Note not found" });
  console.log(`DELETE /notes/${req.params.id} - Deleted?`, success);
  res.json({ message: "Note deleted successfully" });
};
