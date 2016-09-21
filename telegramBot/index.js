var TelegramBot = require('node-telegram-bot-api');

var config = require('./config.json');

// Setup polling way
var bot = new TelegramBot(config.token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);
});

// Any kind of message
bot.on('message', function (msg) {

});

console.log(module.id + " loaded");