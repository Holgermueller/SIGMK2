$(document).ready(() => {
	const APIKey = '94d5b3ebbc302231ae85460cfe0af984';

	$('#submitCityName').on('click', e => {
		e.preventDefault();
		let cityName = $('#forcastLocation').val();

		// get 5-day forecast
		const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&APPID=' + APIKey;

		$.ajax({
			url: forecastURL,
			method: 'GET',
			success: data => {
				console.log(data);

				// map out days of the week
				let daysOfWeek = ['Sunday',
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday'];

				// map out months
				let months = [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December'
				];

				// get icons on dom
				let forecastVariable = data.list.forEach(e => {
					// get date from timestamp
					let date = new Date(e.dt * 1000);
					let day = daysOfWeek[date.getDay()];
					let month = months[date.getMonth()];
					let forecastDate = date.getDate();
					let hour = date.getHours() % 12;
					let minutes = date.getMinutes();
					minutes = minutes < 10 ? '0' + minutes : minutes;

					// get forecast high
					let kHigh = parseFloat(e.main.temp_max);
					let kHighToFHigh = (((kHigh - 273.15) * 1.8) + 32);
					let highF = Math.round(kHighToFHigh);

					//get forecast low
					let kLow = parseFloat(e.main.temp_min);
					let kLowToFLow = (((kLow - 273.15) * 1.8) + 32);
					let lowF = Math.round(kLowToFLow);

					// append info to DOM
					let forecastIcons = e.weather[0].icon;
					let main = e.weather[0].main;
					let description = e.weather[0].description;
					let forecastIconURL = 'https://openweathermap.org/img/w/' + forecastIcons + '.png';
					$('#forecastdropdown').append(`<div class="single-forecast-div">
					<div class="forecast-date">
					<div class="time-data">
					<div>${day}</div>
					<div>${month} ${forecastDate}</div>
						<div>${hour}:${minutes}</div>
						</div>
						</div>
						<div class="icon"><img src=${forecastIconURL} alt="weather icon"></div>
						<div class="forecast-data">
						<div class="forecast-temp">High: ${highF}&#176 | Low: ${lowF}&#176</div>
						<div class="forecast-humidity">Humidity: ${e.main.humidity}%</div>
						<div class="main-forecast">${main}</div>
						<div class="forecast-description">Description: ${description}</div>
						</div>
						</div>`);
				});
			}
		});

	});
});
