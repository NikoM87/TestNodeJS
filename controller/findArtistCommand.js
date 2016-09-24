var util = require('util');
var FrontCommand = require("./frontCommand");
var artistMapper = require("../mapper/artistMapper");

util.inherits(FindArtistCommand, FrontCommand);

function FindArtistCommand() {
    FindArtistCommand.super_.apply(this);
}

FindArtistCommand.prototype.process = function () {
    var id = this.request.query["id"];
    var r = this.response;
    artistMapper.find(id, function (artists) {
        if (artists != null) {
            r.send(JSON.stringify(artists));
        }
        else {
            var err = new Error("Артист не найден");
            r.send(JSON.stringify(err));
        }
    });
};

module.exports = FindArtistCommand;