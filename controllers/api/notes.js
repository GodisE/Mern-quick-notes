const Note = require("../../models/notes");

async function createNote(req, res, next) {
    console.log(req.body)
  try {
    const note = req.body.note
    // note.owner = req.user._id
    await Note.create(req.body.note)
    .then((note) => {
        res.status(201).json({ note: note })
    })

  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  createNote,
};
