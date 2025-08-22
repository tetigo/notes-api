const repo = require("../data/util/getNoteData");

const getAllNotesService = () => repo.getAllNotes();

const getNoteByIdService = (id) => repo.getNoteById(id);

const createNoteService = (data) => repo.createNote(data);

const updateNoteService = (id, data) => repo.updateNote(id, data);

const deleteNoteService = (id) => repo.deleteNote(id);

module.exports = {
  getAllNotesService,
  getNoteByIdService,
  createNoteService,
  updateNoteService,
  deleteNoteService
};