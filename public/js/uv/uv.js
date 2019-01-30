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
        let uvMessage = $('<div>').addClass('uv-message');

        let uvInfo = $('<div>').append(uvRating).append(ratingColor).append(uvMessage);

        let individualForecastInfo = $('<div>').addClass('ind-frcst-info').append(dateInfo)
          .append('<hr>').append(uvInfo);

        if (uvRating <= 2.9) {
          $('.rating-color').css({ 'background-color': '#289500' }).css({ 'color': '#289500' });
          $('.uv-message').text("All's well");
        } else if (uvRating >= 3.0 && uvRating <= 5.9) {
          $('.rating-color').css({ 'background-color': '#F7E403' }).css({ 'color': '#F7E403' });
          $('.uv-message').text("Sunscreen needed");
        } else if (uvRating >= 6.0 && uvRating <= 7.9) {
          $('.rating-color').css({ 'background-color': '#F85901' }).css({ 'color': '#F85901' });
          $('.uv-message').text("Seek cover!");
        } else if (uvRating >= 8.0 && uvRating <= 10.9) {
          $('.rating-color').css({ 'background-color': '#D80D1C' }).css({ 'color': '#D80D1C' });
          $('.uv-message').text("Repent!!");
        } else {
          $('.rating-color').css({ 'background-color': '#6B49C7' }).css({ 'color': '#6B49C7' });
          $('.uv-message').text("Doom is upon you!!");
        }

        $('#uvForecast').append(individualForecastInfo);
      });
    });
  }
});