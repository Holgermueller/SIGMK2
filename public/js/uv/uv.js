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
    }).then(uvData => {
      console.log(uvData);
      let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      $.map(uvData, uvArrayItem => {
        let date = new Date(uvArrayItem.date * 1000);
        let day = daysOfWeek[date.getDay()];
        let month = months[date.getMonth()];
        let uvDate = date.getDate();
        let dayOfWeek = $('<div>').addClass('day-of-week').append(day);
        let dayAndMonth = $('<div>').addClass('day-and-month').append(month + ' ' + uvDate)
        let dateInfo = $('<div>').addClass('date-info').append(dayOfWeek).append(dayAndMonth);

        let uvRating = uvArrayItem.value;
        let ratingColor = $('<div>').addClass('rating-color').text('X');
        let uvMessage = $('<div>').addClass('uv-message').text('message goes here');

        let uvInfo = $('<div>').append(uvRating).append(ratingColor).append(uvMessage);

        let individualForecastInfo = $('<div>').addClass('ind-frcst-info').append(dateInfo)
        .append('<hr>').append(uvInfo);

        $('#uvForecast').append(individualForecastInfo);
      });
    });
  }
});