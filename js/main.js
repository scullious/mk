$(document).ready(function() {
    $('#app').vide({
      mp4: "video/video.mp4",
      webm: "video/video.webm",
      ogv: "video/video.ogv",
      poster: "img/poster.jpg"
    });
});


function calc() {
    let G = 6.67408e-11,
        M = document.querySelector('#mass').value,
        d = document.querySelector('#dist').value;
        
    var g = G * M / d ** 2;
    var t = Math.sqrt(12 * d / (8 * g));
    document.querySelector('#result').value = t;
        
};