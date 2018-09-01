// Get current time:
function updatingTime() {
	const currentTime = new Date();
	let hours = currentTime.getHours() % 12;
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();

	seconds = seconds < 10 ? '0' + seconds : seconds;

	minutes = minutes < 10 ? '0' + minutes : minutes;

	let updatingHours = hours + ':' + minutes + ':' + seconds + ' ';

	document.getElementById('time').innerHTML = updatingHours;
};
setInterval(updatingTime, 1000);

// determine user location

// get weather forecasts

// display weather forecasts
