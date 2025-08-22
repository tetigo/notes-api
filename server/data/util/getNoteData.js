let notes = [];
let nextId = 1;

const getAllNotes = () => notes;

const getNoteById = (id) => notes.find(n => n.id === id);

const createNote = (data) => {
  const note = { id: nextId++, ...data };
  notes.push(note);
  return note;
};

const updateNote = (id, data) => {
  const note = notes.find(n => n.id === id);
  if (!note) return null;
  Object.assign(note, data);
  return note;
};

const deleteNote = (id) => {
  const index = notes.findIndex(n => n.id === id);
  if (index === -1) return false;
  notes.splice(index, 1);
  return true;
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
};
