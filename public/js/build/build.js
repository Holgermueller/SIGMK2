(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    }).catch(err => {
      console.log(err);
    });
  }
});

},{}],2:[function(require,module,exports){
$(document).ready(() => {

  function clearSky() {
    $('#body').removeAttr('style');
  }

  function dawnBackground() {
    $('#body').css({ "background-image": "radial-gradient(circle at bottom, #FFCD00, #00FAFF)" });
  }

  function dayBackground() {
    $('#body').css({ "background-color": "#00EBFF" });
  }

  function sunsetBackground() {
    $('#body').css({ "background-image": "radial-gradient(circle at bottom, #FF0500, #5F0066)" });
  }

  function nightBackground() {
    $('#body').css({ "background-color": "#280066" });
  }

  function cloudy() {
    $('.weather').css({
      "background-image": "linear-gradient(rgba(128,128,128, 1), rgba(128,128,128, 0))",
      "background-size": "100%"
    });
  }

  function partlyCloudy() {
    $('.weather').css({
      "background-image": "linear-gradient(rgba(220,220,220, 1), rgba(220,220,220, 0))",
      "background-size": "100%"
    });
  }

  function sunnySkies() {
    $('.weather').css({
      "background-image": "linear-gradient(-135deg, rgba(255,215,0, 1), rgba(255,255,0, 0))",
      "background-size": "100%"
    });
  }

  $(document).on('click', '#dawn', () => {
    dawnBackground();
  });

  $(document).on('click', '#day', () => {
    clearSky()
    dayBackground();
  });

  $(document).on('click', '#sunset', () => {
    sunsetBackground();
  });

  $(document).on('click', '#night', () => {
    clearSky()
    nightBackground();
  });

  $(document).on('click', '#partlyCloudy', () => {
    partlyCloudy();
  });

  $(document).on('click', '#cloudy', () => {
    cloudy();
  });

  $(document).on('click', '#sunny', () => {
    sunnySkies();
  });

});
},{}],3:[function(require,module,exports){
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
      $("#forecastWeather").empty();
      $("#forecastLocation").append('<h3>').text(`${forecastData.city.name}, ${forecastData.city.country}`)
        .addClass("forecast-location");

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

        let forecastConditions = $('<div>').append('Conditions: ' + eachForecastDay.weather[0].main).addClass('forecast-conditions');

        let kMain = parseFloat(eachForecastDay.main.temp);
        let kMaintoFMain = (((kMain - 273.15) * 1.8) + 32);
        let mainF = Math.round(kMaintoFMain);
        let kMaintoCMain = kMain - 273.15;
        let mainC = Math.round(kMaintoCMain);
        let mainTemps = $(`<div>Temps: ${mainF}&#176 F / ${mainC}&#176 C</div>`).addClass('main-temps')

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
        let furtherDescription = $('<div>').text(eachForecastDay.weather[0].description);
        let cloudiness = $('<div>').text('Clouds: ' + eachForecastDay.clouds.all + '%');

        let extraForecastInfo = $('<div>').addClass('extra-info').append(furtherDescription)
          .append(forecastTemps).append(humidity).append(cloudiness);

        let daysWeather = $('<div>').addClass('days-weather-main')
          .append(forecastConditions).append(mainTemps);

        let forecastWeather = $("<div>").addClass("single-forecast-weather-div")
          .append(forecastDateAndTime)
          .append(daysWeather).append(forecastIcons).append(extraForecastInfo);

        $("#forecastWeather").append(forecastWeather);
      });
    }).catch(err => {
      console.log(err);
    });
  }
});

},{}],4:[function(require,module,exports){
$(document).ready(() => {
  const APIKey = '94d5b3ebbc302231ae85460cfe0af984';

  $('#submitCityName').on('click', () => {
    let requestedLocation = $('#weatherLocation').val().trim();
    let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + requestedLocation + "&APPID=" + APIKey;

    $.ajax({
      url: forecastURL,
      method: "GET"
    }).then(forecastData => {
      $("#forecastWeather").empty();
      $("#forecastLocation").append('<h3>').text(`${forecastData.city.name}, ${forecastData.city.country}`)
        .addClass("forecast-location");

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

        let forecastConditions = $('<div>').append('Conditions: ' + eachForecastDay.weather[0].main).addClass('forecast-conditions');

        let kMain = parseFloat(eachForecastDay.main.temp);
        let kMaintoFMain = (((kMain - 273.15) * 1.8) + 32);
        let mainF = Math.round(kMaintoFMain);
        let kMaintoCMain = kMain - 273.15;
        let mainC = Math.round(kMaintoCMain);
        let mainTemps = $(`<div>Temps: ${mainF}&#176 F / ${mainC}&#176 C</div>`).addClass('main-temps')

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
        let furtherDescription = $('<div>').text(eachForecastDay.weather[0].description);
        let cloudiness = $('<div>').text('Clouds: ' + eachForecastDay.clouds.all + '%');

        let extraForecastInfo = $('<div>').addClass('extra-info').append(furtherDescription)
          .append(forecastTemps).append(humidity).append(cloudiness);

        let daysWeather = $('<div>').addClass('days-weather-main')
          .append(forecastConditions).append(mainTemps);

        let forecastWeather = $("<div>").addClass("single-forecast-weather-div")
          .append(forecastDateAndTime)
          .append(daysWeather).append(forecastIcons).append(extraForecastInfo);

        $("#forecastWeather").append(forecastWeather);
      });
    }).catch(err => {
      console.log(err);
    });
  });
});

},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
$(document).ready(_ => {
  const APIKey = '94d5b3ebbc302231ae85460cfe0af984';

  $('#submitCityName').on('click', () => {
    let requestedLocation = $('#weatherLocation').val().trim();
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + requestedLocation + "&APPID=" + APIKey;
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(data => {
      $("#currentWeather").empty();

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

      let savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || [];
      let id = $(this).data('index');
      let locationName = $('#weatherLocation').val().trim();
      let oneSavedLocation = {
        id,
        locationName
      };

      savedLocations.push(oneSavedLocation);
      localStorage.setItem('savedLocations', JSON.stringify(savedLocations));

    }).catch(err => {
      console.log(err);
    });
    populateLocationsDropdown();
  });

  function populateLocationsDropdown() {
    let searchLocations = JSON.parse(localStorage.getItem('savedLocations'));
    $('#dropdownContent').empty();

    $.map(searchLocations, locationName => {
      let locationNameForList = locationName.locationName;
      let savedLocationForList = $('<button>').addClass('saved-location')
        .text(locationNameForList)
        .attr('value', locationNameForList)
        .attr('id', locationNameForList);

      $('#dropdownContent').append(savedLocationForList);
    });
  }
  populateLocationsDropdown();
});

},{}],7:[function(require,module,exports){
$(document).ready(() => {

  $(document).on('click', '.saved-location', () => {
    let weatherQueryLocation = $('.saved-location').id();
    console.log(weatherQueryLocation);



  });
});
},{}],8:[function(require,module,exports){
function updateTime() {
  moment();
  const CURRENTDATEANDTIME = moment().format("ddd, MMM Do, YYYY <br> hh:mm:ss A");
  $("#currentTime").html(CURRENTDATEANDTIME);
}
setInterval(updateTime, 1000);

},{}],9:[function(require,module,exports){
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
      //console.log(uvData);
      let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      $.map(uvData, uvArrayItem => {
        let date = new Date(uvArrayItem.date * 1000);
        let day = daysOfWeek[date.getDay()];
        let month = months[date.getMonth()];
        let uvDate = date.getDate();
        let dayOfWeek = $('<div>').addClass('day-of-week').append(day);
        let dayAndMonth = $('<div>').addClass('month').append(month);
        let theDay = $('<div>').addClass('day').append(uvDate);
        let dateInfo = $('<div>').addClass('date-info').append(dayOfWeek).append(dayAndMonth).append(theDay);

        let uvRating = uvArrayItem.value;
        let ratingColor = $('<div>').addClass('rating-color').text('X');
        let uvMessage = $('<div>').addClass('uv-message');

        let uvInfo = $('<div>').append(uvRating).append(ratingColor).append(uvMessage);

        let individualUVForecastInfo = $('<div>').addClass('ind-frcst-info').append(dateInfo)
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
        } else if (uvRating > 11) {
          $('.rating-color').css({ 'background-color': '#6B49C7' }).css({ 'color': '#6B49C7' });
          $('.uv-message').text("Doom is upon you!!");
        }

        $('#uvForecast').append(individualUVForecastInfo);
      });
    }).catch(err => {
      console.log(err);
    });
  }
});
},{}]},{},[1,2,3,4,5,6,7,8,9]);
