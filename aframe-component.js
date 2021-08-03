//geral
var myScene = document.querySelector('#myScene');
var myCamera = document.querySelector('#myCamera');

//animation
AFRAME.registerComponent('key-box', {
  init: function() {
    document.querySelectorAll('#keyBoxH', '#keyBoxJ', '#keyBoxK', 'keyBoxL');
    document.addEventListener('keydown', evt => {
      if (evt.keyCode === 72) { // h
        keyBoxH.emit("keypressed");
      }
      if (evt.keyCode === 74) { // j
        keyBoxJ.emit("keypressed");
      }
      if (evt.keyCode === 75) { // k
        keyBoxK.emit("keypressed");
      }
      if (evt.keyCode === 76) { // l 
        keyBoxL.emit("keypressed");
      }
    });
  }
});