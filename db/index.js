var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./db.sqlite");

//db.run("CREATE TABLE albums (ID INTEGER PRIMARY KEY AUTOINCREMENT, title varchar)");
//db.run("CREATE TABLE tracks (ID INTEGER PRIMARY KEY AUTOINCREMENT, seq int, albumID int, title varchar)");

function execute(sql, cb) {
    db.serialize(function () {
        db.run(sql, cb);
    });
}

function insert(artist) {
    db.serialize(function () {
        db.run("INSERT INTO lorem VALUES (?)")
    });
}

function example() {
    db.serialize(function () {
        db.run("CREATE TABLE lorem (info TEXT)");

        var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (var i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();

        db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
            console.log(row.id + ": " + row.info);
        });
    });
}

console.log("DB module is loaded.");

exports.execute = execute;
exports.close = db.close;