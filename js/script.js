$(document).ready(function(){
	console.log("script.js loaded");

	if ($(window).width() <= '576'){
		$("#logo").attr("src","images/logo.png");
	}

	$(function(){
	        var hh = $('.header_n').height();
	        var fh = $('.footer_n').height(); 
	        var wh = $(window).height(); 
	        var сh = wh - hh - fh - 32; 
	        $('.middle').css('min-height', сh); 
	    });
	$(window).resize(function(){
	  $(function(){
	        var hh = $('.header_n').height();
	        var fh = $('.footer_n').height(); 
	        var wh = $(window).height(); 
	        var сh = wh - hh - fh - 32; 
	        $('.middle').css('min-height', сh); 
	    });

	  	if ($(window).width() <= '576'){
			$("#logo").attr("src","images/logo.png");
		} else {
			$("#logo").attr("src","images/logo.svg");
		}
	});
	 
	
})