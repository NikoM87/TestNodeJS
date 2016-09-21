var express = require("express");
var fs = require("fs");

function start() {
    var app = express();

    app.get("/", function (req, resp) {
        fs.readFile("./site/index.html", function (err, data) {
            resp.writeHead(200, {'Content-Type': 'text/html'});
            resp.write(data);
            resp.end();
        });

        console.log("Get home page");
    });

    app.get("/f1", function (req, resp) {
        resp.send("func 1");
    });

    app.get("/f2", function (req, resp) {
        resp.send("func 2");
    });

    app.listen(8888, function () {
        console.log('Example app listening on port 8888!');
    });
}

exports.start = start;