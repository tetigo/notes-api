let notes = [];
let nextId = 1;

export const getAllNotes = () => notes;

export const getNoteById = (id) => notes.find(n => n.id === id);

export const createNote = (data) => {
  const note = { id: nextId++, ...data };
  notes.push(note);
  return note;
};

export const updateNote = (id, data) => {
  const note = notes.find(n => n.id === id);
  if (!note) return null;
  Object.assign(note, data);
  return note;
};

export const deleteNote = (id) => {
  const index = notes.findIndex(n => n.id === id);
  if (index === -1) return false;
  notes.splice(index, 1);
  return true;
};
