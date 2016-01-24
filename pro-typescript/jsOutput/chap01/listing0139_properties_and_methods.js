var Playlist = (function () {
    function Playlist(name) {
        this.name = name;
        this.songs = [];
    }
    Playlist.prototype.addSong = function (song) {
        if (this.songs.length >= Playlist.maxSongCount) {
            throw new Error('Playlist is full');
        }
        this.songs.push(song);
    };
    Playlist.maxSongCount = 30;
    return Playlist;
})();
// Creating a new instance
var playlist = new Playlist('My Playlist');
// Accessing a public instance property
var name = playlist.name;
// Calling a public instance method
playlist.addSong(new Song('Therapy?', 'Crooked Timber'));
// Accessing a public static property
var maxSongs = Playlist.maxSongCount;
