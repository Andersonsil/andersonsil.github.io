// Obtener el elemento de video
const video = document.querySelector('#videoWindow');
  
// Obtener los botones
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');

// Añadir eventos a los botones
playButton.addEventListener('click', () => {
  video.play();
});

pauseButton.addEventListener('click', () => {
  video.pause();
});