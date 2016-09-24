var util = require('util');
var FrontCommand = require("./frontCommand");

util.inherits(ArtistCommand, FrontCommand);

function ArtistCommand() {
    ArtistCommand.super_.apply(this);
}

ArtistCommand.prototype.process = function () {
    this.response.send("Artist команда");
};

module.exports = ArtistCommand;