$( document ).ready(function() {
	$("#title").hide();
  	$("#about").hide();
  	$("#about2").hide();
  	$("#work").hide();
  	$("#projects").hide();
    $("#title").fadeIn(1000, function() {
	  $("#about").fadeIn(1000, function() {
	  	$("#about2").fadeIn(1000, function() {
	  		$("#work").fadeIn(1000);
	  		$("#projects").fadeIn(1500);
	  	});
	  });
	});
});