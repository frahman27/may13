const tracks = [
  'assets/clip1.mp3',
  'assets/clip2.mp3',
  'assets/clip3.mp3',
  'assets/clip4.mp3',
  'assets/clip5.mp3',
  'assets/clip6.mp3',
  'assets/clip7.mp3',
  'assets/clip8.mp3',
  'assets/clip9.mp3'
];

let current = 0;
const audio = document.getElementById('audio-player');
const btn = document.getElementById('next-btn');

btn.addEventListener('click', () => {
  current = (current + 1) % tracks.length;
  audio.src = tracks[current];
  audio.play();
});
