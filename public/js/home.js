//======= CUSTOM JS =======//

$(document).ready(function run() {
	//WHEN SUBMIT BUTTON CLICKS
	$("button").click(function(evt) {
		evt.preventDefault();
		//REMOVE ALL TR'S
		$("tr").remove();
		$("p").remove();
		if(($("#height").val() <= 0 || $("#width").val() <= 0) || ($("#height").val() >= 40 || $("#width").val() >= 40)) {
			alert("Add values under 40 and more to 0");
		} else {
			//IMPORTAND VARIABLES
			const table  = $(".table");
			const height = $("#height").val();
			const width  = $("#width").val();
				//NESTED LOOPS ONE FOR TR'S AND ONE FOR TD'S()
				for(var row = 1; row <= height; row++) {
					table.append("<tr></tr>");
					for(var col = 1; col <= width; col++) {
						table.children().last().append("<td></td");
					}
				}
			}
			if(($("#height").val() <= 0 || $("#width").val() <= 0) || ($("#height").val() >= 40 || $("#width").val() >= 40)) {
				$("table").before("<p><i class='fa fa-info-circle'; aria-hidden='true'></i>&nbspTry AGAIN!!</p>");
			} else {
				//ADD CLASSES FOR BOUNCE EFFECTS ALSO ADD INFORMATION <P>
				$("#fade").toggleClass("animated bounceInUp");
				$("table").before("<p><i class='fa fa-info-circle'; aria-hidden='true'></i>&nbspLeft click once to color click again for UNDO</p>");
			}
				//EVENT DELIGATION LISTENER ON TABLE
				$(".table").on("click", "td", function() {
			    	//STORE THE COLOR FROM INPUT IN A VARIABLE AND CHANGE THE TD BACKGROUND
			    	const color = $("input[type=color]").val();
			    	if(!$(this).hasClass("nothing")) {
			    		$(this).css("background", color);
			    		$(this).addClass("nothing");
			    	} else {
			    		$(this).css("background" , "transparent");
			    		$(this).removeClass("nothing");
			    	}
			    });

	});
});





