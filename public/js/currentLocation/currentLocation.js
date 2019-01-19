$(document).ready(() => {

  function getCurrentLocation() {
    navigator.geolocation ?
      navigator.geolocation.getCurrentPosition(showPosition) :
      console.log('Not supported by this browser');
  };
  getCurrentLocation();

  function showPosition(position) {
    const APIKey = '94d5b3ebbc302231ae85460cfe0af984';
    const LAT = position.coords.latitude;
    const LONG = position.coords.longitude;
    const QUERYURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + LAT + "&lon=" + LONG + "&APPID=" + APIKey;

    $.ajax({
      url: QUERYURL,
      method: "GET"
    }).then(data => {
      $("#currentWeather").empty();
      $("#currentLocation").append('<h3>').text(`${data.name}, ${data.sys.country}`)
        .addClass("current-location");

      let K = parseFloat(data.main.temp);
      let kToF = (((K - 273.15) * 1.8) + 32);
      let F = Math.round(kToF);
      let kToC = K - 273.15;
      let C = Math.round(kToC);
      let tempDiv = $(`<div>Temp: ${F}&#176  F / ${C}&#176  C</div>`).addClass("temp-div");

      let sunriseStamp = parseFloat(data.sys.sunrise);
      let stampDate = new Date(sunriseStamp * 1000);
      let sunriseTime = stampDate.toLocaleTimeString();
      let sunrise = $(`<div>Sunrise: ${sunriseTime}</div>`);

      let sunsetStamp = parseFloat(data.sys.sunset);
      let dateStamp = new Date(sunsetStamp * 1000);
      let sunsetTime = dateStamp.toLocaleTimeString();
      let sunset = $(`<div>Sunset: ${sunsetTime}</div>`);

      let timeDiv = $("<div>").addClass("time-div")
        .append(sunrise).append(sunset);

      let apiVis = data.visibility;
      let milesVis = apiVis * 0.000621371192;
      let miles = Math.round(milesVis);
      let visibility = $(`<div>Visibility: ${miles} Miles</div>`);

      let apiPress = data.main.pressure;
      let inchesPressure = apiPress * 0.02953;
      let inches = Math.round(inchesPressure);
      let pressure = $(`<div>Pressure: ${inches} Inches</div>`);

      let humidity = $(`<div>Humidity: ${data.main.humidity} %</div>`);

      let description = $("<div>").text(data.weather[0].description);

      let supplementalInfo = $("<div>").addClass("supplemental-current-info")
        .append(description).append(timeDiv).append(visibility)
        .append(pressure).append(humidity);

      let currentWeatherConditions = data.weather[0].main;
      let currentConditionsDiv = $(`<div class='current-conditions'>Current Conditions: <br> ${currentWeatherConditions}</div>`);

      let displayIcon = data.weather[0].icon;
      let weatherIconURL = 'https://openweathermap.org/img/w/' + displayIcon + '.png';
      let weatherIcon = $("<img alt='img'>").attr('src', weatherIconURL).addClass("weather-icon");

      $("#currentWeather").append(currentConditionsDiv).append(tempDiv)
      .append(weatherIcon)  
        .append(supplementalInfo);
    });
  }
});
