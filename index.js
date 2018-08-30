function updatingTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours() % 12;
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    seconds < 10 ? '0' + seconds : seconds;

    minutes < 10 ? '0' + minutes : minutes;

    let updatingHours = hours + ': ' + minutes + ': ' + seconds + ' ';
    hours >= 12 ? updatingHours += 'PM' : updatingHours += 'AM'

    document.getElementById('time').innerHTML = updatingHours;
};
setInterval(updatingTime, 1000);

const myLocation = document.getElementById('location');

function userLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        myLocation.innerHTML = 'Geolocation is not supported by this browser.';
    }
};

function showPosition(position) {

}

console.log(navigator.geolocation.getCurrentPosition(showPosition));