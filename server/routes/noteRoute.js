const express = require("express");
const controller = require("../controllers/noteController");
const router = express.Router();

router.get("/notes", controller.getAllNotes);
router.get("/notes/:id", controller.getNoteById);
router.post("/notes", controller.createNote);
router.put("/notes/:id", controller.updateNote);
router.delete("/notes/:id", controller.deleteNote);

module.exports = router;