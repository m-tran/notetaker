const fs = require("fs");
const util = require("util");

module.exports = {
    getNotes: async (req, res) => {
        try {
            console.log("api has been hit!");
            fs.readFile('./db/db.json', function read(err, data) {
                if (err) { throw err; }
                content = JSON.parse(data);
                res.json(content);
            });
        } catch (err) {
            res.send(err);
        }
        
    },

    newNote: async (req, res) => {
        try {
            console.log("posted!");
            let body = req.body;
            await fs.readFile('./db/db.json', function read(err, data) {
                if (err) { throw err; }
                content = JSON.parse(data);
            });
            await content.push(body);
            fs.writeFileSync("./db/db.json", JSON.stringify(content, null, 2));
            res.send(content);
        } catch (err) {
            res.send(err);
        }
        
    },

    deleteNote: async (req, res) => {
        try {
            console.log("success!");

            let notesData = await fs.readFileSync("../db/db.json", "utf8");
            notesData = await JSON.parse(notesData);
    
            await fs.writeFileSync("db.json", JSON.stringify(body, null, 2));
            res.send(notesData);
        } catch (err) {
            res.send(err);
        }  
    },
};