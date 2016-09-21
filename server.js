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