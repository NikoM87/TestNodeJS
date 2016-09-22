var server = require("./server");
var db = require("./db/index");

var Album = require("./domain/album");
var Track = require("./domain/track");

var albumMapper = require("./mapper/albumMapper");
var trackMapper = require("./mapper/trackMapper");

var a1 = new Album(1, "Title");
a1.addTrack(new Track(1, "Track title 1"));
a1.addTrack(new Track(2, "Track title 2"));
a1.addTrack(new Track(3, "Track title 3"));

/*a1.getTracks().forEach(function (item, i, arr) {
 albumMapper.insertTrack(item, i, a1);
 });*/

albumMapper.insert(a1);


var tracks = [];
trackMapper.findForAlbum(1, function (result) {
    tracks = result;
});

var a2 = new Album(2);

server.start();

console.log("App started.");