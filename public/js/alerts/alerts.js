$(document).ready(() => {

    const APIKey = '94d5b3ebbc302231ae85460cfe0af984';
    $('#submitCityName').on('click', e => {
        e.preventDefault();
        let cityName = $('#forcastLocation').val();
    
        // get alerts
        const alertsURL = 'https://api.openweathermap.org/data/3.0/triggers?q=' + cityName + '&APPID=' + APIKey;
    
        $.ajax({
            url: alertsURL,
            method: 'GET',
            success: data => {
                console.log(data);
            }
        })
        
    });
});
