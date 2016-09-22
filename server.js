var express = require("express");
var bodyParser = require('body-parser');
var db = require("./db");

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
        db.execute(req.body.expresion, function (err) {
            if (err == null) {
                var body = "SQL выполнен. <br//>" +
                    "Выражение SQL: \" " + req.body.expresion + "\"";

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