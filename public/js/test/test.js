$(document).ready(_ => {

  function getLocation() {
    navigator.geolocation ?
      navigator.geolocation.getCurrentPosition(showPosition) :
      alert('Geolocaiton not supported by this browser');
  };
  getLocation();

  function showPosition(position) {
    const APIKey = '94d5b3ebbc302231ae85460cfe0af984';
    const LAT = position.coords.latitude;
    const LONG = position.coords.longitude;
    let QUERYURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + LAT + "&lon=" + LONG + "&APPID=" + APIKey;
  //return QUERYURL;
    
  }
  showPosition()

  console.log(QUERYURL);
});