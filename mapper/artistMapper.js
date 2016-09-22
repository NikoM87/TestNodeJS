var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./db.sqlite");


var findStatement = "SELECT ID, name from artists where ID = ?";

function find(artistId) {
    db.serialize(function () {
        db.all(findStatement, artistId, function (err, rows) {
            rows.forEach(function (row) {
                tracks.push(new Track(row.ID, row.title));
                console.log(row.id + ": " + row.info);
            });

            cb(tracks);
        });

    });
}

