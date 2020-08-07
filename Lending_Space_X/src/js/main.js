var instance = new vidbg('.video_world', {
  mp4: '../assets/video/world.mp4', // URL or relative path to MP4 video
  webm: '../assets/video/world.webm', // URL or relative path to webm video
  poster: '../assets/img/world_poster.jpg', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
});

var rellax = new Rellax('.rocket', {
  breakpoints: [576, 768, 1201]
});
if (document.body.clientWidth < 576) {
  rellax.destroy();
}

AOS.init();