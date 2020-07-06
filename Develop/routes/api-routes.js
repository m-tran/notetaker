const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");

router.get("/api/notes", (req, res) => {
    console.log("api has been hit!");

    let notesData = fs.readFileSync("db.json", "utf8");
    notesData = JSON.parse(notesData);
    res.json(notesData);
});

router.post("/api/notes", (req, res) => {
    let notesData = fs.readFileSync("db.json", "utf8");
    notesData = JSON.parse(notesData);

    let body = req.body;
    notesData.push(body);

    fs.writeFileSync("db.json", JSON.stringify(body, null, 2));
    res.send(notesData);
});

router.delete("api/notes/:id", (req, res) => {
    console.log("success!");

    let notesData = fs.readFileSync("db.json", "utf8");
    notesData = JSON.parse(notesData);

    fs.writeFileSync("db.json", JSON.stringify(body, null, 2));
    res.send(notesData);
});

module.exports = router;