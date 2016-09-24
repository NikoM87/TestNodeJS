var express = require("express");
var bodyParser = require('body-parser');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./db.sqlite");

var frontServlet = require('./frontServlet');
var sqlCommand = require('./controller/sqlCommand');

function start() {
    var app = express();
    app.use(bodyParser.urlencoded({extended: false})); // parse application/x-www-form-urlencoded


    app.get("/", function (req, res) {
        res.sendfile("./site/index.html");

        console.log("Get home page");
    });

    app.get("/music", frontServlet.doGet);

    app.post("/execute", function (req, resp) {
        resp.sendfile("./site/execute.html");
    });

    app.get("/sql", sqlCommand.doGet);
    app.post("/sql", sqlCommand.doPost);

    app.listen(8888, function () {
        console.log('Example app listening on port 8888!');
    });
}

exports.start = start;