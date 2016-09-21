var http = require("http");
var express = require("express");

function start() {
    var app = express();

    app.get("/", function (req, resp) {
        resp.send("Home page");
    });

    app.get("/f1", function (req, resp) {
        resp.send("func 1");
    });

    app.get("/f2", function (req, resp) {
        resp.send("func 2");
    });

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
}

exports.start = start;