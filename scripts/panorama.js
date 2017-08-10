$(document).ready(function(){
	$(".panorama").panorama_viewer({
	    repeat: true,
	    direction: "horizontal",
	    animationTime: 700, 
	    easing: "ease-out",       
			overlay: false,          
		});
	var counter = 2;
	function sec() {
		var dots = document.getElementsByClassName('js-nav-dot');
		var back = document.getElementById('back');
		var img1 = "url('image/banner/cont-1.jpg')";
		var img2 = "url('image/banner/cont-2.jpg')"; 
		var img3 = "url('image/banner/cont-3.jpg')";
		if(counter == 1){
			back.style.backgroundImage = img1;
			counter = 2;
			dots[0].classList.add("l-nav__dot-active");
			dots[2].classList.remove("l-nav__dot-active");
		}
		else if(counter == 2){
			back.style.backgroundImage = img2;
			counter = 3;
			dots[1].classList.add("l-nav__dot-active");
			dots[0].classList.remove("l-nav__dot-active");
		}
		else{
			back.style.backgroundImage = img3;
			counter = 1;
			dots[2].classList.add("l-nav__dot-active");
			dots[1].classList.remove("l-nav__dot-active");
		}
	}
	setInterval(sec, 5000);
});