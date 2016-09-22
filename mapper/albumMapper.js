var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./db.sqlite");

function insert(album) {
    db.serialize(function () {
        var insertStatement = db.prepare("INSERT INTO albums(title) VALUES (?)");
        insertStatement.run(album.title);
        insertStatement.finalize();

        updateTracks(album);
    });
}

function update(album) {
    db.serialize(function () {
        var updateStatement = db.prepare("UPDATE albums SET title = ? WHERE id = ?");
        updateStatement.run(album.id, album.title);

        updateTracks(album);
    });
}

function updateTracks(album) {
    db.serialize(function () {
        var deleteTracksStatement = db.prepare("DELETE from tracks WHERE albumID = ?");
        deleteTracksStatement.run(album.id);
        deleteTracksStatement.finalize();

        album.getTracks().forEach(function (item, i, err) {
            insertTrack(item, i + 1, album);
        });
    });
}

function insertTrack(track, seq, album) {
    db.serialize(function () {
        var insertTracksStatement = db.prepare("INSERT INTO tracks(seq, albumID, title) VALUES (?, ?, ?)");
        insertTracksStatement.run(seq, album.id, track.title);
        insertTracksStatement.finalize();
    });
}


exports.insert = insert;
exports.update = update;
exports.insertTrack = insertTrack;
exports.updateTracks = updateTracks;