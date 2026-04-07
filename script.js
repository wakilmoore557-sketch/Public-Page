let songs = JSON.parse(localStorage.getItem("songs")) || [];

function displayPublicSongs() {
    let container = document.getElementById("songsContainer");
    container.innerHTML = "";

    let publicSongs = songs.filter(song => song.isPublic);

    publicSongs.forEach(song => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${song.cover}">
            <h3>${song.artist}</h3>
            <audio controls src="${song.music}"></audio>
        `;

        container.appendChild(card);
    });
}

displayPublicSongs();
