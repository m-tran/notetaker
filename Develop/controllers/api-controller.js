const fs = require("fs");
const util = require("util");

module.exports = {
    getNotes: async (req, res) => {
        try {
            console.log("api has been hit!");
            fs.readFile('./db/db.json', function read(err, data) {
                if (err) {
                    throw err;
                }
                content = JSON.parse(data);x
                res.json(content);
            });
        } catch (err) {
            res.send(err);
        }
        
    },

    newNote: async (req, res) => {
        try {
            console.log("posted!");
            let notesData = fs.readFileSync("../db/db.json");
            notesData = JSON.parse(notesData);
    
            let body = req.body;
            notesData.push(body);
    
            fs.writeFileSync("../db/db.json", JSON.stringify(notesData, null, 2));
            console.log("sent!");
            res.send(notesData);
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