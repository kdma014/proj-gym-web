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




});










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
		ctx.arc(cx, cy, radius - 20, 0, 2 * Math.PI, false);
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