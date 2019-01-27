// $(document).ready(() => {
//   function getCurrentLocation() {
//     navigator.geolocation ?
//       navigator.geolocation.getCurrentPosition(showPosition) :
//       alert('Not supported by this browser');
//   };
//   getCurrentLocation();

//   function showPosition(position) {
//     const APIKey = '94d5b3ebbc302231ae85460cfe0af984';
//     const ALERTLAT = position.coords.latitude;
//     const ALERTLONG = position.coords.longitude;
//     const alertsURL = 'https://api.openweathermap.org/data/3.0/triggers?lat=' + ALERTLAT + '&lon=' + ALERTLONG + '&APPID=' + APIKey;

//     $.ajax({
//       url: alertsURL,
//       method: 'GET'
//     }).then(alertData => {
//       console.log(alertData);
//     });
//   }
// });
