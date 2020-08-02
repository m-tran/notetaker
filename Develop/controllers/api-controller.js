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
            let key = await content.length;
            content[key-1].id = await key;
            await console.log(content[key-1]);
            fs.writeFileSync("./db/db.json", JSON.stringify(content, null, 2));
            res.send(content);
        } catch (err) {
            res.send(err);
        }
        
    },

    deleteNote: async (req, res) => {
        try {
            console.log("success!");
            await fs.readFile('./db/db.json', function read(err, data) {
                if (err) { throw err; }
                content = JSON.parse(data);
            });
            fs.writeFileSync("db.json", JSON.stringify(body, null, 2));
            res.send(notesData);
        } catch (err) {
            res.send(err);
        }  
    },
};