var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./db.sqlite");
var Artist = require("../domain/artist");


var findStatement = "SELECT ID, name from artists where ID = ?";

function find(artistId, cb) {
    db.serialize(function () {
        db.all(findStatement, artistId, function (err, rows) {
            rows.forEach(function (row) {
                cb(new Artist(row.id, row.name));
                console.log(row.id + ": " + row.info);
            });
        });
    });
}

exports.find = find;

