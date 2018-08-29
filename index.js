function updatingTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours() % 12;
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if ( seconds < 10) {
        seconds = '0' + seconds;
    }

    if (minutes < 10 ) {
        minutes = '0' + minutes;
    }

    let updatingHours = hours + ': ' + minutes + ': ' + seconds + ' ';
    if (hours > 11) {
        updatingHours += 'PM';
    } else {
        updatingHours += 'AM'
    }
    document.getElementById('time').innerHTML = updatingHours;
};
setInterval(updatingTime, 1000);

const myLocation = document.getElementById('location');

function userLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        myLocation.innerHTML = 'Geolocation is not supported by this browser.';
    }
};

function showPosition(position) {
    
}

console.log(navigator.geolocation.getCurrentPosition(showPosition));