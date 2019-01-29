$(document).ready(_ => {
  function getCurrentLocation() {
    navigator.geolocation ?
      navigator.geolocation.getCurrentPosition(showPosition) :
      alert('Not supported by this browser');
  };
  getCurrentLocation();

  function showPosition(position) {
    const APIKey = '94d5b3ebbc302231ae85460cfe0af984';
    const uvLAT = position.coords.latitude;
    const uvLONG = position.coords.longitude;
    const uvURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + uvLAT + "&lon=" + uvLONG + "&APPID=" + APIKey;

    $.ajax({
      url: uvURL,
      method: "GET"
    }).then( uvData => {
      console.log(uvData);
    });
  }
});