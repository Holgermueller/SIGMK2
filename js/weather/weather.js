$(document).ready(() => {

  const APIKey = '94d5b3ebbc302231ae85460cfe0af984';

  $(document).on('click', '#submitCityName', e => {
    e.preventDefault();
    //$('#currentWeather').empty();
    let cityName = $('#forcastLocation').val();
    const queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=' + APIKey;
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(data => {
      $("#currentWeather").empty();
      console.log(data);
      $("#currentLocation").append('<h3>').text(`${data.name}, ${data.sys.country}`)
        .addClass("current-location");

      $("#currentWeather").append("<p>hello</p>");
    })



    // $.ajax({
    //   url: url,
    //   method: 'GET',
    //   success: data => {
    //     console.log(data);
    //     $('#queryLocation')[0].reset();
    //     $('#locationDropdown').append(`<div id="locationDropdown" class="dropdown-content">
    // 		<h3>${data.name}, ${data.sys.country}</h3>
    // 		</div>`)

    //     let displayIcon = data.weather[0].icon;
    //     let weatherIconURL = 'https://openweathermap.org/img/w/' + displayIcon + '.png';

    //     let K = parseFloat(data.main.temp);
    //     let kToF = (((K - 273.15) * 1.8) + 32);
    //     let F = Math.round(kToF);
    //     let kToC = K - 273.15;
    //     let C = Math.round(kToC);

    //     let sunriseStamp = parseFloat(data.sys.sunrise);
    //     let stampDate = new Date(sunriseStamp * 1000);
    //     let sunriseTime = stampDate.toLocaleTimeString();

    //     let sunsetStamp = parseFloat(data.sys.sunset);
    //     let dateStamp = new Date(sunsetStamp * 1000);
    //     let sunsetTime = dateStamp.toLocaleTimeString();

    //     let apiVis = data.visibility;
    //     let milesVis = apiVis * 0.000621371192;
    //     let miles = Math.round(milesVis);

    //     let apiPress = data.main.pressure;
    //     let inchesPressure = apiPress * 0.02953;
    //     let inches = Math.round(inchesPressure);
    //     console.log(data.weather[0].main);

    //     $("#currentWeather").append('<div>Hello</div>');

    //     $('#currentWeather').append(`<div class="current-info-all">
    // 		<div class="current-info-main">
    //     <div>${data.weather[0].main}</div>
    // 			<div>Temp: ${F}&#176  F / ${C}&#176  C</div>
    // 			<div>Description: ${data.weather[0].description}</div>
    // 			</div>
    // 			<div id="weatherIcon" class="current-icon"><img id="icon" src="${weatherIconURL}" alt="weather icon"></div>
    // 			<div class="supplemental-current-info">
    // 			<div>Humidity: ${data.main.humidity} %</div>
    // 			<div>Pressure: ${inches} Inches</div>
    // 			<div>Visibility: ${miles} Miles</div>
    // 			<div>Sunrise: ${sunriseTime}</div>
    // 			<div>Sunset: ${sunsetTime}</div>
    // 			</div>
    // 			</div>`)
    //   }
    // });
  });
});
