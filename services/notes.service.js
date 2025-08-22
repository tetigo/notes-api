import * as repo from "../repositories/notes.repository.js";

export const getAllNotesService = () => repo.getAllNotes();

export const getNoteByIdService = (id) => repo.getNoteById(id);

export const createNoteService = (data) => repo.createNote(data);

export const updateNoteService = (id, data) => repo.updateNote(id, data);

export const deleteNoteService = (id) => repo.deleteNote(id);
