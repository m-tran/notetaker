const fs = require("fs");
const util = require("util");

module.exports = {
    getNotes: async (req, res) => {
        try {
            console.log("api has been hit!");
            let notesData = await fs.readFileSync("db.json", "utf8");
            notesData = await JSON.parse(notesData);
            res.json(notesData);
        } catch (err) {
            res.send(err);
        }
        
    },

    newNote: async (req, res) => {
        try {
            console.log("posted!");
            let notesData = await fs.readFileSync("db.json", "utf8");
            notesData = await JSON.parse(notesData);
    
            let body = await req.body;
            notesData.push(body);
    
            await fs.writeFileSync("db.json", JSON.stringify(body, null, 2));
            res.send(notesData);
        } catch (err) {
            res.send(err);
        }
        
    },

    deleteNote: async (req, res) => {
        try {
            console.log("success!");

            let notesData = await fs.readFileSync("db.json", "utf8");
            notesData = await JSON.parse(notesData);
    
            await fs.writeFileSync("db.json", JSON.stringify(body, null, 2));
            res.send(notesData);
        } catch (err) {
            res.send(err);
        }  
    },
};