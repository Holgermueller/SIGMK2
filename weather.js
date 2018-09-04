$(document).ready(() => {

	navigator.geolocation ?
		navigator.geolocation.getCurrentPosition(showPosition):
		console.log('not supported');

	function showPosition(position) {
		const Lat = position.coords.latitude;
		const Long = position.coords.longitude;


		let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + Lat + '&lon=' + Long + '*********';

		$.ajax({
			url:url,
			method: 'GET',
			success: data => {
				console.log(data);
			}
		})
	}

});

// get weather for that specific time an place

// display weather