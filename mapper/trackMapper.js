var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./db.sqlite");

var Track = require("../domain/track");

var findForAlbumStatement =
    "SELECT ID, seq, albumID, title " +
    " FROM tracks " +
    " WHERE albumID = ? ORDER BY seq";

function findForAlbum(albumID, cb) {
    db.serialize(function () {
        var tracks = [];
        db.all(findForAlbumStatement, albumID, function (err, rows) {
            rows.forEach(function (row) {
                tracks.push(new Track(row.ID, row.title));
                console.log(row.id + ": " + row.info);
            });

            cb(tracks);
        });
    });
}

exports.findForAlbum = findForAlbum;

