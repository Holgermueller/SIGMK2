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
        let forecastWeather = $("<div>").addClass("single-forecast-weather-div").text(eachForecastDay.weather[0].main);

        $("#forecastWeather").append(forecastWeather);
      });
    });
  }
});
