$( document ).ready(function() {
	$("#title").hide();
  	$("#about").hide();
  	$("#about2").hide();
  	$("#work").hide();
  	$("#projects").hide();
  	$("#stick").hide();
    $("#title").fadeIn(1000, function() {
      $("#stick").delay(200).fadeIn(1000);
	  $("#about").fadeIn(1000, function() {
	  	$("#about2").fadeIn(1000, function() {
	  		$("#projects").fadeIn(1500);
	  	});
	  });
	});
});