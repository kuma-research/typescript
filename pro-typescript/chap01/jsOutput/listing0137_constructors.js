var Song = (function () {
    function Song(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    Song.prototype.play = function () {
        console.log('Playing ' + this.title + ' by ' + this.artist);
    };
    return Song;
})();
var JukeBox = (function () {
    function JukeBox(songs) {
        this.songs = songs;
    }
    JukeBox.prototype.play = function () {
        var song = this.getRandomSong();
        song.play();
    };
    JukeBox.prototype.getRandomSong = function () {
        var songCount = this.songs.length;
        var songIndex = Math.floor(Math.random() * songCount);
        return this.songs[songIndex];
    };
    return JukeBox;
})();
var songs = [
    new Song('Bushbaby', 'Megaphone'),
    new Song('Delays', 'One More Lie In'),
    new Song('Goober Gun', 'Stereo'),
    new Song('Sohnee', 'Shatter'),
    new Song('Get Amped', 'Celebrity')
];
var jukebox = new JukeBox(songs);
jukebox.play();
