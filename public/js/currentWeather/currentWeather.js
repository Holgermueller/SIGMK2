$(document).ready(() => {

  function getLocation() {
    navigator.geolocation ?
      navigator.geolocation.getCurrentPosition(showPosition) :
      console.log('Not supported by this browser');
  };
  getLocation();

  function showPosition(position) {
    const APIKey = '94d5b3ebbc302231ae85460cfe0af984';
    const LAT = position.coords.latitude;
    const LONG = position.coords.longitude;
    let QUERYURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + LAT + "&lon=" + LONG + "&APPID=" + APIKey;

    $.ajax({
      url: QUERYURL,
      method: "GET"
    }).then(data => {

      moment();
      let time = moment().hour();

      function dawnBackground() {
        $('#body').css({ "background-image": "linear-gradient(#00FAFF, #FFCD00)" });
      }

      function dayBackground() {
        $('#body').css({ "background-color": "#00EBFF" });
      }

      function sunsetBackground() {
        $('#body').css({ "background-image": "linear-gradient(#5F0066, #FF0500)" });
      }

      function nightBackground() {
        $('#body').css({ "background-color": "#280066" });
      }

      if (time >= 6 && time <= 7) {
        dawnBackground();
      } else if (time > 7 && time < 17) {
        dayBackground();
      } else if (time >= 17 && time <= 18) {
        sunsetBackground();
      } else {
        nightBackground();
      }

      $("#currentWeather").empty();
      $("#currentLocation").append('<h3>').text(`${data.name}, ${data.sys.country}`)
        .addClass("current-location");

      let K = parseFloat(data.main.temp);
      let kToF = (((K - 273.15) * 1.8) + 32);
      let F = Math.round(kToF);
      let kToC = K - 273.15;
      let C = Math.round(kToC);
      let currentTempDiv = $(`<div>Temp: ${F}&#176  F / ${C}&#176  C</div>`).addClass("temp-div");

      let highK = parseFloat(data.main.temp_max);
      let highKToF = (((highK - 273.15) * 1.8) + 32);
      let highF = Math.round(highKToF);
      let highKToC = highK - 273.15;
      let highC = Math.round(highKToC);
      let highTempDiv = $(`<div>High: ${highF}&#176 F / ${highC}&#176 C</div>`).addClass("extra-temps");

      let lowK = parseFloat(data.main.temp_min);
      let lowKToF = (((lowK - 273.15) * 1.8) + 32);
      let lowF = Math.round(lowKToF);
      let lowKToC = lowK - 273.15;
      let lowC = Math.round(lowKToC);
      let lowTempDiv = $(`<div>Low: ${lowF}&#176 F / ${lowC}&#176 C</div>`).addClass("extra-temps");

      let allTemps = $("<div>").addClass("all-temps")
        .append(currentTempDiv).append(highTempDiv).append(lowTempDiv);

      let sunriseStamp = parseFloat(data.sys.sunrise);
      let stampDate = new Date(sunriseStamp * 1000);
      let sunriseTime = stampDate.toLocaleTimeString();
      let sunrise = $(`<div>Sunrise: ${sunriseTime}</div>`).addClass("sunrise");

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

      let currentWeatherInfo = $("<div>").addClass("all-current-info")
        .append(currentConditionsDiv).append(allTemps);

      let displayIcon = data.weather[0].icon;
      let weatherIconURL = 'https://openweathermap.org/img/w/' + displayIcon + '.png';
      let weatherIcon = $("<img alt='img'>").attr('src', weatherIconURL).addClass("weather-icon");

      $("#currentWeather").append(currentWeatherInfo)
        .append(weatherIcon)
        .append(supplementalInfo);
    });
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;

      case error.POSITION_UNAVAILABLE:
        alert("Location info is unavailable.");
        break;

      case error.TIMEOUT:
        alert("The request to get location timed out.");
        break;

      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred");
        break;

    }
  }
});
