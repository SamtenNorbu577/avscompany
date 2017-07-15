$(document).ready(function(){
	$(".js-menu").click(function(){
		$(".js-menu-body").css({"display": "block"});
	})
	$(".js-menu-close").click(function(){
		$(".js-menu-body").css({"display": "none"});
	})
});