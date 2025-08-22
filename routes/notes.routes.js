import express from "express";
import * as controller from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/notes", controller.getAllNotes);
router.get("/notes/:id", controller.getNoteById);
router.post("/notes", controller.createNote);
router.put("/notes/:id", controller.updateNote);
router.delete("/notes/:id", controller.deleteNote);

export default router;
