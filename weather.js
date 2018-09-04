$(document).ready(() => {

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else{
		console.log('not supported');
	}

	function showPosition(position) {
		console.log(position.coords);
	}

});
// determine user location

// get weather for that specific time an place

// display weather