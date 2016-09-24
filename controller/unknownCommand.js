var util = require('util');
var FrontCommand = require("./frontCommand");

util.inherits(UnknownCommand, FrontCommand);

function UnknownCommand() {
    UnknownCommand.super_.apply(this);
}

UnknownCommand.prototype.process = function () {
    this.response.send("Неизвестная команда");
};

module.exports = UnknownCommand;