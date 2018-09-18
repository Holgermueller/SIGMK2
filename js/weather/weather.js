$(document).ready(() => {

	const APIKey = '94d5b3ebbc302231ae85460cfe0af984';

	$('#submitCityName').on('click', e => {
		e.preventDefault();
		let cityName = $('#forcastLocation').val();

		const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=' + APIKey;

		$.ajax({
			url: url,
			method: 'GET',
			success: data => {
				// create banner for location
				$('#currentWeather').append(`<div id="currentLocation" class="current-location-banner">
				<h3>${data.name}, ${data.sys.country}</h3>
				 </div>`)

				// get icon on DOM
				let displayIcon = data.weather[0].icon;
				let weatherIconURL = 'http://openweathermap.org/img/w/' + displayIcon + '.png';

				// convert temps from kelvin:
				let K = parseFloat(data.main.temp);
				let kToF = (((K - 273.15) * 1.8) + 32);
				let F = Math.round(kToF);
				let kToC = K - 273.15;
				let C = Math.round(kToC);

				// convert sunrise to actual time
				let sunriseStamp = parseFloat(data.sys.sunrise);
				let stampDate = new Date(sunriseStamp * 1000);
				let sunriseTime = stampDate.toLocaleTimeString();

				let sunsetStamp = parseFloat(data.sys.sunset);
				let dateStamp = new Date(sunsetStamp * 1000);
				let sunsetTime = dateStamp.toLocaleTimeString();

				$('#currentWeather').append(`
				<div class="current-info-main">


				<div>${data.weather[0].main}</div>

					<div>Temp: ${F}&#176  F / ${C}&#176  C</div>

					<div>Description: ${data.weather[0].description}</div>
					</div>

					<div id="weatherIcon" class="current-icon"><img id="icon" src="${weatherIconURL}" alt="weather icon"></div>

					<div class="supplemental-current-info">
					<div>Humidity: ${data.main.humidity} %</div>

					<div>Pressure: ${data.main.pressure}</div>

					<div>Visibility: ${data.visibility}</div>

					<div>Sunrise: ${sunriseTime}</div>

					<div>Sunset: ${sunsetTime}</div>
					</div>`)
			}
		});
	});
});
