const tracksContainer = document.getElementById("tracks");
const player = document.getElementById("player");
const searchInput = document.getElementById("search");

// Liste de test — tu ajoutes tes fichiers ici
const tracks = [
  {
    id: 1,
    title: "éxclu 2026",
    artist: "ven1",
    cover: "images/éxclu.jpg",
    url: "audio/éxclu.mp3"
  },
  {
    id: 2,
    title: "élivera",
    artist: "ven1",
    cover: "images/élivera.jpg",
    url: "audio/élivera.mp3"
  },
  {
    id: 3,
    title: "Gateau",
    artist: "ven1",
    cover: "images/gateau.jpg",
    url: "audio/gateau.mp3"
  },
  {
    id: 4,
    title: "Gaucamel",
    artist: "ven1",
    cover: "images/nichen.jpg",
    url: "audio/gaucamel.mp3"
  },
];

// Fonction pour afficher les musiques
function displayTracks(list) {
  tracksContainer.innerHTML = "";
  list.forEach(track => {
    const div = document.createElement("div");
    div.className = "track";
    div.innerHTML = `
      <img src="${track.cover}" />
      <h4>${track.title}</h4>
      <p>${track.artist}</p>
    `;
    div.addEventListener("click", () => {
      player.src = track.url;
      player.play();
    });
    tracksContainer.appendChild(div);
  });
}

// Affichage initial
displayTracks(tracks);

// Recherche simple
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = tracks.filter(track =>
    track.title.toLowerCase().includes(query) ||
    track.artist.toLowerCase().includes(query)
  );
  displayTracks(filtered);
});
