// $('.parallax-window').parallax({imageSrc: './img/bg2.png'});
// $('.parallax2').parallax({imageSrc: './img/bg3.png'});

function onStart() {

}
$(".next_slide").click(function(){
    $(this).parent().parent().addClass("width_d")
});
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});