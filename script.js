$(document).ready(function() {

// jQuery Function Number 1
$(".image").click(function(){
	$(this).addClass("imageclick");
	$("#overlaid").show();
});

// jQuery Function Number 2
$("#overlaid").click(function(){
	$(this).hide();
	$(".image").removeClass("imageclick");	
});
	
// jQuery Function Number 3
$(".block").hover(function(){
	$(this).css("color", "white");
});
	
// jQuery Function Number 4
$("#title").dblclick(function(){
	$(this).addClass("titlelower");
});

// jQuery Function Number 5
$(".author").hover(function(){
	$(this).fadeOut();
});
	

// jQuery Function Number 6
$(".profile").hover(function(){
	$(this).css("height","450px");
});


});