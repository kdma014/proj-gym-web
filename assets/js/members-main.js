/*
* Members Area Main JavaScript code
* 
*/


$(document).ready(function(){

	// Initialize all progressPie instance
	$("[data-progress-pie]").each(function(){
		// get the progress value
		var progressValue = $(this).attr("data-progress") || 1;
		
		// Let's see if it has a canvas
		if ( $(this).find("canvas").length < 0 ) {
			console.error("No canvas element inside. Please add one.");
		} 

		else {
			var canvas = $(this).find("canvas")[0];
			progressPie( canvas, progressValue );
		}
	});



	// Form Container - Floating Labels
	$(".form-container .form-row .input-field.floating-label input, .form-container .form-row .input-field.floating-label select").on("change", function(){

	      if ( $(this).val().length > 0 ) {
	        $(this).parent().parent(".form-row").addClass("input--filled");
	      }

	      else {
	        $(this).parent().parent(".form-row").removeClass("input--filled");
	      }

	});



	/*
	* PAGE: Members Invite
	*/

	/* Search Invites */
	var memberInvites;
	$.ajax({
		url: "./assets/js/dummy-data/member-invite.json",
		success: function( data){
			memberInvites = data;
			console.log( data );

			// Populate the box
			var all_member_boxes = "";

			for ( var i = 0; i < data.length; i++ ) {
				var member_invite_item = `
				<div class="member-invited-item">
				    <div class="member-avatar">
				        <img src="${data[i].avatar}" width="100" height="100">
				    </div>
				    <div class="member-detail">
				        <div class="padding-top member-name-level">
				            <span class="name">${data[i].name}</span>
				            <br>
				            <span class="level">${data[i].level[1]}</span>
				        </div>
				        <div class="challenge-invite">
				            <button>Challenge</button>
				        </div>
				    </div>
				</div> 
				`;

				all_member_boxes += member_invite_item;
			}

			$(".members-invited-container").append( all_member_boxes );
		}
	});


	$("#search_invite_query").on("change keydown keyup", function(){
		
		var query = $(this).val();

		if ( query.length === 0 ) {
			query = " ";
		} else {
			query = query;
		}

		var member_items = "";

		// Search options
		var searchOpts = {
			shouldSort: true,
			threshold: 0.2,
			location: 0,
			distance: 100,
			maxPatternLength: 32,
			minMatchCharLength: 5,
			keys: [{
				name: "name", 
				weight: 0.3
			}]
		};

		var fuse = new Fuse(memberInvites, searchOpts);
		var result = fuse.search( query );


		// Add the result to the view
		$(".members-invited-container").html( "" );

		if ( result.length === 0 ) {
			$(".members-invited-container").append("<p>Sorry! No invites were found with that name.<br>Please try another name.</p>");
		}

		else {
			for ( var i = 0; i < result.length; i++ ) {
				var member_invite_item = `
				<div class="member-invited-item animated">
				    <div class="member-avatar">
				        <img src="${result[i].avatar}" width="100" height="100">
				    </div>
				    <div class="member-detail">
				        <div class="padding-top member-name-level">
				            <span class="name">${result[i].name}</span>
				            <br>
				            <span class="level">${result[i].level[1]}</span>
				        </div>
				        <div class="challenge-invite">
				            <button>Challenge</button>
				        </div>
				    </div>
				</div> 
				`;

				member_items += member_invite_item;
			}
			
			$(".members-invited-container").append( member_items );
		}
	});
	

	



});



/*
* To Load Member Invites JSON Data and make search function possible on it
* for PAGE: MEMBER INVITE
*/






/*
* To create simple pie representation of various progress data
* 
*/ 
function progressPie( canvas, progress ) {
	var progressValue = progress;
	var ctx = canvas.getContext("2d");

	var cx = canvas.width  / 2;
	var cy = canvas.height / 2;

	// Assumes the width is always larger than the height of the canvas
	var radius = canvas.width / 2;

	// The inner circle is a full circle, nothing special about it
	ctx.beginPath();
	ctx.arc(cx, cy, radius - 10, 0, 2 * Math.PI, false);
	ctx.fillStyle = '#ccc';
	ctx.fill();

	// This is the gradient fill for the pie
	grd = ctx.createRadialGradient(radius, radius, 0.000, radius, radius, radius);
	grd.addColorStop(0.000, 'rgba(255, 104, 41, 1.000)');
	grd.addColorStop(0.987, 'rgba(213, 25, 25, 1.000)');

	// Now using the progress value let's add the pie representation
	// starts at the angle of -90deg i.e the top center
	/*
	ctx.beginPath();
	ctx.arc(cx, cy, radius, toRadians(-90), toRadians( (progressValue / 100) * (360 - 90) ) );
	ctx.lineTo(cx, cy);
	ctx.closePath();
	ctx.fillStyle = grd;
	ctx.fill();
	*/


	/* TODO: Animate it */
	var initialValue = 0;
	var animProgress = setInterval(function(){
		// Clear react on each frame
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// The inner circle is a full circle, nothing special about it
		ctx.beginPath();
		ctx.arc(cx, cy, radius - 10, 0, 2 * Math.PI, false);
		ctx.fillStyle = '#dde5ef';
		ctx.fill();

		// Draw the progress pie
		ctx.beginPath();
		ctx.arc(cx, cy, radius, toRadians(-90), toRadians( (initialValue / 100) * 360 - 90 ) );
		ctx.lineTo(cx, cy);
		ctx.closePath();
		ctx.fillStyle = grd;
		ctx.fill();

		// Fill the text

		var text = {
			x: cx + 20,
			y: cy,
			font: '29px "Oswald", Helvetica, Arial, sans-serif',
			color: "#fff"
		};

		if ( progressValue < 10 ) {
			text.color = "#000";
		}

		else if ( progressValue >= 10 && progressValue <= 25 ) {
			text.x = radius + 10;
			text.y = 40;
			text.font = '18px "Oswald", Helvetica, Arial, sans-serif';
		}

		else if ( progressValue >= 25 && progressValue <= 50 ) {
			text.x = cx + 20;
			text.y = cy - 20;
		}

		else if ( progressValue > 50 ) {
			text.x = cx + 20;
			text.y = cy + 20;
		}

		ctx.font = text.font;
		ctx.fillStyle = text.color;
		ctx.fillText(initialValue + " %", text.x, text.y);

		if ( progressValue == initialValue ) {
			clearInterval( animProgress );
		}

		initialValue++;
	}, 10);
}

// helper function to convert degrees into radians
function toRadians(deg) {
    return deg * Math.PI / 180
}