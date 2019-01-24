'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	projectClick();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").toggleClass("active");

		setTimeout(function(){$('.jumbotron h1').animate({"opacity" : 0}, 2000);	}, 500);
	});

  $('.project').click(projectClick);

}

function projectClick() {
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
  console.log("initialized");
  var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) {
	  $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
	  description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	}
}
