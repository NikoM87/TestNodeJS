var Track = require("./track");

function Album(id, title) {
    this.id = id;
    this.title = title;
    this.tracks = []
}

Album.prototype.addTrack = function (track) {
    this.tracks.push(track);
};

Album.prototype.removeTrack = function (track) {
    var index = this.tracks.indexOf(track);
    if (index > -1) {
        this.tracks.splice(index, 1);
    }
};

Album.prototype.getTracks = function () {
    return this.tracks;
};


module.exports = Album;