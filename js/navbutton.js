$( document ).ready(function() {
    var dropNav = $("#dropdown-nav");
 
 	$( "#dropdown-button" ).click(function(e) {
 		console.log("fired");
 		var style=dropNav.css("display");
 		if (style=="none") {
 			dropNav.css("display", "inline-block");
 		} else if (style=="block"){
 			dropNav.css("display", "none")
 		};
    });
 
});
