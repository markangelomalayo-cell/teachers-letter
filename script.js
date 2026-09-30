const song = document.getElementById("song");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", function () {

    if (song.paused) {

        song.play()
            .then(function () {
                musicButton.textContent = "⏸ Pause Song";
            })
            .catch(function (error) {
                console.log(error);
                alert("Hindi ma-play ang kanta.");
            });

    } else {

        song.pause();

        musicButton.textContent = "🎵 Play This Song";
    }

});

song.addEventListener("ended", function () {
    musicButton.textContent = "🎵 Play This Song";
});
