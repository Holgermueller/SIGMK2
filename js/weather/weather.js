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
				// console.log(data);
				$('#currentLocation').append(`<h3>${data.name}, ${data.sys.country}</h3>`);

				// get icon on DOM
				let displayIcon = data.weather[0].icon;
				let weatherIconURL = 'http://openweathermap.org/img/w/' + displayIcon + '.png';
				$('#icon').attr('src', weatherIconURL);

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

				$('#currentWeather').append(`<div>${data.weather[0].main}</div>`)
					.append(`<div>Temp: ${F}&#176  F / ${C}&#176  C</div>`)
					.append(`<h5>Description: ${data.weather[0].description}</h5>`)
					.append(`<div>Humidity: ${data.main.humidity} %</div>`)
					.append(`<div>Pressure: ${data.main.pressure}</div>`)
					.append(`<div>Visibility: ${data.visibility}</div>`)
					.append(`<div>Sunrise: ${sunriseTime} | Sunset: ${sunsetTime}</div>`)
			}
		});
	});
});
