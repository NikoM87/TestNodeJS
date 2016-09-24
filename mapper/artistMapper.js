var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./db.sqlite");
var Artist = require("../domain/artist");


var findStatement = "SELECT ID, name from artists where ID = ?";

function find(artistId, cb) {
    db.serialize(function () {
        db.all(findStatement, artistId, function (err, rows) {
            var art = [];
            rows.forEach(function (row) {
                art.push(new Artist(row.id, row.name));
                console.log(row.id + ": " + row.info);
            });
            if (art.length > 0) {
                cb(art[0]);
            } else {
                cb(null);
            }
        });
    });
}

exports.find = find;

