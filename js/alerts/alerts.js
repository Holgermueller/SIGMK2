$(document).ready(() => {

    const APIKey = '94d5b3ebbc302231ae85460cfe0af984';

    // get alerts
    const alertsURL = 'http://api.openweathermap.org/data/3.0/triggers?q=' + cityName + '&APPID=' + APIKey;

    $.ajax({
        url: alertsURL,
        method: 'GET',
        success: data => {
            console.log(data);
        }
    })

});
