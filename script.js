import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA04iOZEmF1eL5R3nrJzEbmwuXwWrRTwOQ",
  authDomain: "public-page-70169.firebaseapp.com",
  databaseURL: "https://public-page-70169-default-rtdb.firebaseio.com",
  projectId: "public-page-70169",
  storageBucket: "public-page-70169.firebasestorage.app",
  messagingSenderId: "220213379029",
  appId: "1:220213379029:web:a3756acddbee7dd50fc75c"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const songsRef = ref(db, "songs");

function displaySongs(data) {
    let container = document.getElementById("songsContainer");
    container.innerHTML = "";

    data.forEach(song => {
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

onValue(songsRef, (snapshot) => {
    let data = snapshot.val();
    if (!data) return;

    displaySongs(Object.values(data));
});
