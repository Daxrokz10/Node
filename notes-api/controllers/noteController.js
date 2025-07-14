const fs = require('fs');
const notes = require('../data/notes.json');

exports.getAllNotes = (req, res) => {
  res.json(notes);
};

exports.getNoteById = (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).send('Note not found');
  res.json(note);
};
