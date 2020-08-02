const router = require("express").Router();
const {
    getNotes,
    newNote,
    deleteNote
} = require("../controllers/api-controller");

router.get("/api/notes", getNotes);
router.post("/api/notes", newNote);
router.delete("/api/notes", deleteNote);

module.exports = router;