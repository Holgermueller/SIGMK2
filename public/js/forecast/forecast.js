$(document).ready(() => {

  function getCurrentLocation() {
    navigator.geolocation ?
      navigator.geolocation.getCurrentPosition(showPosition) :
      console.log('Not supported by this browser');
  };
  getCurrentLocation();

  function showPosition(position) {
    const APIKey = '94d5b3ebbc302231ae85460cfe0af984';
    const FORECASTLAT = position.coords.latitude;
    const FORECASTLONG = position.coords.longitude;
    const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + FORECASTLAT + '&lon='+ FORECASTLONG + '&APPID=' + APIKey;

    $.ajax({
      url: forecastURL,
      method: "GET"
    }).then(forecastdata => {
      console.log(forecastdata);
    });
  }
});
