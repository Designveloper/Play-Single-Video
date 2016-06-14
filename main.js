document.addEventListener('DOMContentLoaded', function(){
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var canvasImage = document.getElementById('image');
  var img = document.getElementById('img')
  var contextImage = canvasImage.getContext('2d');

  var canvasSubtitle = document.getElementById('subtitle');
  var contextSubtitle = canvasSubtitle.getContext('2d');

  video.addEventListener('loadedmetadata', function() {
   canvas.width = video.videoWidth;
   canvas.height = video.videoHeight;

   canvasImage.width = video.videoWidth;
   canvasImage.height = video.videoHeight;

   canvasSubtitle.width = video.videoWidth;
   canvasSubtitle.height = video.videoHeight;

   contextSubtitle.font = "30px Arial";
   contextSubtitle.fillStyle = "red";
   contextSubtitle.textAlign = "center";
  });

  video.addEventListener('play', function() {
   var $this = this;
   video.playbackRate = 1;
   img.style.display = "none";
   video.style.display = "none";
   setTimeout(function(){
     contextImage.drawImage(img,video.videoWidth - 40,5);
   },2000);

   setTimeout(function(){
     contextSubtitle.fillText("DEMO FROM DSV", canvas.width/2, canvas.height/2);
   },video.duration*1000 - 5000);

   (function loop() {
     if (!$this.paused && !$this.ended) {
       context.drawImage($this, 0, 0);
       setTimeout(loop, 1000 / 50); // drawing at 30fps
     }
   })();
  }, 0);
},false);
