$(document).ready(() => {
  function getCurrentLocation() {
    navigator.geolocation ?
      navigator.geolocation.getCurrentPosition(showPosition) :
      alert('Not supported by this browser');
  };
  getCurrentLocation();

  function showPosition(position) {
    const APIKey = '94d5b3ebbc302231ae85460cfe0af984';
    const FORECASTLAT = position.coords.latitude;
    const FORECASTLONG = position.coords.longitude;
    const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + FORECASTLAT + '&lon=' + FORECASTLONG + '&APPID=' + APIKey;

    $.ajax({
      url: forecastURL,
      method: "GET"
    }).then(forecastData => {
      console.log(forecastData);
      $("#forecastWeather").empty();
      $("#forecastLocation").append('<h3>').text(`${forecastData.city.name}, ${forecastData.city.country}`)
        .addClass("forecast-location");

      //$("#forecastWeather").append('<h1>').text(`${}`)
      let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      $.map(forecastData.list, eachForecastDay => {
        let date = new Date(eachForecastDay.dt * 1000);
        let day = daysOfWeek[date.getDay()];
        let month = months[date.getMonth()];
        let forecastDate = date.getDate();
        let hour = date.getHours() % 12;
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let forecastDateAndTime = $('<div>').addClass('forecast-date-and-time')
          .append(day + ', ' + month + ' ' + forecastDate + ' ' + hour + ':' + minutes);

        let forecastConditions = $('<div>').text(eachForecastDay.weather[0].main).addClass('forecast-conditions');

        let kHigh = parseFloat(eachForecastDay.main.temp_max);
        let kHighToFHigh = (((kHigh - 273.15) * 1.8) + 32);
        let highF = Math.round(kHighToFHigh);
        let highKToC = kHigh - 273.15;
        let highC = Math.round(highKToC);
        let forecastHighDiv = $(`<div>High: ${highF}&#176 F / ${highC}&#176 C</div>`).addClass('high-temps');

        let kLow = parseFloat(eachForecastDay.main.temp_min);
        let kLowToFLow = (((kLow - 273.15) * 1.8) + 32);
        let lowF = Math.round(kLowToFLow);
        let lowKToC = kLow - 273.15;
        let lowC = Math.round(lowKToC);
        let forecastLowsDiv = $(`<div>Low: ${lowF}&#176 F / ${lowC}&#176 C</div>`).addClass('low-temps');

        let forecastTemps = $('<div>').addClass('forecast-temps')
          .append(forecastHighDiv).append(forecastLowsDiv);

        let forecastIconsInfo = eachForecastDay.weather[0].icon;
        let forcastIconsURL = 'https://openweathermap.org/img/w/' + forecastIconsInfo + '.png';
        let forecastIcons = $("<img alt='img'>").attr('src', forcastIconsURL).addClass('forecast-icon');

        let humidity = $('<div>').text('Humidity: ' + eachForecastDay.main.humidity + '%');

        let extraForecastInfo = $('<div>').addClass('extra-info').append(humidity);

        let daysWeather = $('<div>').addClass('days-weather-main').append(forecastDateAndTime)
          .append(forecastConditions).append(forecastTemps);

        let forecastWeather = $("<div>").addClass("single-forecast-weather-div")
          .append(daysWeather).append(forecastIcons).append(extraForecastInfo);

        $("#forecastWeather").append(forecastWeather);
      });
    });
  }
});
