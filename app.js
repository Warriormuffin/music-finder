function getMusic() {
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList) {
    songList.sort(function (a,b) {
        if(a.collection > b.collection){
            return 1}
        if(a.collection < b.collection){
            return -1}
        if(a.collection == b.collection){
            return 0}
        
    })
    var table = document.getElementById('song-list');
    table.innerHTML = ""
    var props = ['title', 'albumArt', 'artist', 'collection', 'price', 'preview'];
    for (var i = 0; i < songList.length; i++) {
        var song = songList[i];
        var row = document.createElement('tr')

        for (var prop in song) {
            var cell = document.createElement('td')
            if (prop == 'albumArt') {
                cell.innerHTML = '<img src="' + song[prop] + '"/>'
            }
            else if (prop == 'preview') {
                cell.innerHTML = '<audio controls = "controls"  preload="none"><source src="' + song[prop] + '" type="audio/mp4"/></audio>'
            }
            else {
                cell.innerHTML = song[prop]
            }
            row.appendChild(cell)
        }
        table.appendChild(row)
    }
}



document.getElementById("artist")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("get-music-button").click();
    }
});



