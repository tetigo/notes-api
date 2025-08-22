const service = require("../models/Note");

export const getAllNotes = (req, res) => {
  const notes = service.getAllNotesService();
  res.json(notes);
};

export const getNoteById = (req, res) => {
  const id = parseInt(req.params.id);
  const note = service.getNoteByIdService(id);
  if (!note) return res.status(404).json({ error: "Note not found" });
  res.json(note);
};

export const createNote = (req, res) => {
  const { title, content } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });
  const note = service.createNoteService({ title, content });
  res.status(201).json(note);
};

export const updateNote = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const note = service.updateNoteService(id, { title, content });
  if (!note) return res.status(404).json({ error: "Note not found" });
  res.json(note);
};

export const deleteNote = (req, res) => {
  const id = parseInt(req.params.id);
  const success = service.deleteNoteService(id);
  if (!success) return res.status(404).json({ error: "Note not found" });
  res.json({ message: "Note deleted successfully" });
};
