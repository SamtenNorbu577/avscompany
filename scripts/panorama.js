$(document).ready(function(){
	$(".panorama").panorama_viewer({
	    repeat: true,
	    direction: "horizontal",
	    animationTime: 700, 
	    easing: "ease-out",       
			overlay: false,          
		});
			
	function sec() {
		
	}
	setInterval(sec, 3000);
});