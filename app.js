const tracks = [
  { title: "BOUGIE", artist: "VEN1", cover:"images/hakeyet.jpg", url:"audio/VEN1 - BOUGIE.mp3", category:"tendance" },
  { title: "Gâteau", artist: "VEN1", cover:"images/gateau.jpg", url:"audio/gateau.mp3", category:"ven1" },
  { title: "Pêche", artist: "VEN1", cover:"images/nichen.jpg", url:"audio/peche.mp3", category:"ven1" },
  { title: "Exclu", artist: "VEN1", cover:"images/éxclu.jpg", url:"audio/éxclu.mp3", category:"tendance" },
  { title: "Elivera", artist: "VEN1", cover:"images/élivera.jpg", url:"audio/élivera.mp3", category:"tendance" },
  { title: "Son Gims", artist: "Gims", cover:"images/hakeyet.jpg", url:"audio/gaucamel.mp3", category:"gims" },
];

const content = document.getElementById("content");

function createTrackCard(track){
  const div = document.createElement("div");
  div.className = "track";
  div.innerHTML = `
    <img src="${track.cover}">
    <h4>${track.title}</h4>
    <p>${track.artist}</p>
  `;
  div.onclick = () => loadTrack(track);
  return div;
}

function displayCategory(name, title) {
  const section = document.createElement("section");
  section.innerHTML = `<h2>${title} <span>+</span></h2><div class="tracks-row"></div>`;
  const container = section.querySelector(".tracks-row");
  tracks.filter(t => t.category === name).slice(0,5)
        .forEach(track => container.appendChild(createTrackCard(track)));
  content.appendChild(section);
}

displayCategory("tendance", "🔥 Tendances");
displayCategory("ven1", "🎤 VEN1");
displayCategory("gims", "🎶 Gims");

/* PLAYER */

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

function loadTrack(track){
  audio.src = track.url;
  document.getElementById("player-title").textContent = track.title;
  document.getElementById("player-artist").textContent = track.artist;
  document.getElementById("player-cover").src = track.cover;
  audio.play();
  playBtn.textContent = "⏸";
}

playBtn.onclick = () => {
  if(audio.paused){ audio.play(); playBtn.textContent="⏸"; }
  else { audio.pause(); playBtn.textContent="▶"; }
};

audio.ontimeupdate = () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
};

progress.oninput = () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
};

volume.oninput = () => {
  audio.volume = volume.value;
};
