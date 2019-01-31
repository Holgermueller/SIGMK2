// $(document).ready(_=> {
//   function getCurrentLocation() {
//     navigator.geolocation ?
//       navigator.geolocation.getCurrentPosition(showPosition) :
//       alert('Not supported by this browser');
//   };
//   getCurrentLocation();

//   function showPosition(position) {
//     const APIKey = '94d5b3ebbc302231ae85460cfe0af984';
//     const uvLAT = position.coords.latitude;
//     const uvLONG = position.coords.longitude;
//     const mapURL = "https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?APPID=" + APIKey;

//     $.ajax({
//       url: mapURL,
//       method: 'GET'
//     }).then(mapData => {
//       console.log(mapData);
//     })
//   }
// });