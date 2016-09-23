var express = require("express");
var bodyParser = require('body-parser');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./db.sqlite");

function start() {
    var app = express();
    app.use(bodyParser.urlencoded({extended: false})); // parse application/x-www-form-urlencoded


    app.get("/", function (req, res) {
        res.sendfile("./site/index.html");

        console.log("Get home page");
    });

    app.post("/execute", function (req, resp) {
        resp.sendfile("./site/execute.html");
    });

    app.post("/sql", function (req, resp) {
        db.all(req.body.expresion, function (err, rows) {
            if (err == null) {
                var body = "SQL выполнен. <br//>" +
                    "Выражение SQL: \" " + req.body.expresion + "\"<br//>" +
                    "<br//>" +
                    "Результат:<br//>";

                rows.forEach(function (row) {
                    body += JSON.stringify(row) + "<br//>";
                });

                resp.send(body);
            } else {
                resp.send(err.message);
            }
        });
    });

    app.listen(8888, function () {
        console.log('Example app listening on port 8888!');
    });
}

exports.start = start;