function updatingTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
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
}
setInterval(updatingTime, 1000);