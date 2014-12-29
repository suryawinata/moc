$(function() {
	navigationFirstLoad();

    $("#owl-click").on('click', function (e) {
    	if($(this).hasClass('open-wing')){
			$(this).removeClass('open-wing');
			$("#owl-click .left-wing").animate({marginLeft: "-10px"},600);
			$("#owl-click .left-wing").animate({marginTop: "50px"},1000);
	    	$("#owl-click .right-wing").animate({marginLeft: "-90px"},600);
	    	$("#owl-click .right-wing").animate({marginTop: "50px"},1000);
	    	setTimeout(function(){ 
				$("#owl-click .right-nav.navigation").removeClass('animated fadeInLeft').addClass('animated fadeOutLeft'); 
				$("#owl-click .left-nav.navigation").removeClass('animated fadeInRight').addClass('animated fadeOutRight'); 
			}, 600);
    	}
    	else{
    		$(this).addClass('open-wing');
	    	$("#owl-click .left-wing").animate({marginTop: "40px"},100);
	    	$("#owl-click .left-wing").animate({marginLeft: "-70px"},1000);
	    	$("#owl-click .right-wing").animate({marginTop: "40px"},100);
	    	$("#owl-click .right-wing").animate({marginLeft: "-30px"},1000);
	    	$("#owl-click .navigation").animate({opacity: "1"},1000);
	    	setTimeout(function(){ 
				$("#owl-click .right-nav.navigation").removeClass('animated fadeOutLeft').addClass('animated fadeInLeft'); 
				$("#owl-click .left-nav.navigation").removeClass('animated fadeOutRight').addClass('animated fadeInRight'); 
			}, 600);
    	}
	});
});

function navigationFirstLoad () {
	$('#owl-click').addClass('animated bounceInUp');
	setTimeout(function(){ 
		$("#owl-click").addClass('open-wing');
		$("#owl-click .left-wing").animate({marginTop: "40px"},100);
		$("#owl-click .left-wing").animate({marginLeft: "-70px"},1000);
		$("#owl-click .right-wing").animate({marginTop: "40px"},100);
		$("#owl-click .right-wing").animate({marginLeft: "-30px"},1000);
	}, 700);
	setTimeout(function(){ 
		$("#owl-click .right-nav.navigation").addClass('animated fadeInLeft'); 
		$("#owl-click .left-nav.navigation").addClass('animated fadeInRight'); 
	}, 1000);
	
}