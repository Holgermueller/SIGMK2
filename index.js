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

// Get location:

const myLocation = document.getElementById('location');

function userLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		myLocation.innerHTML = 'Geolocation is not supported by this browser.';
	}
};
console.log(navigator.geolocation);


function showPosition(position) {

}

// get weather forcasts
const getLocationFromForm = document.querySelector('.query-location');

function getLocation(e) {
	e.preventDefault();
	document.getElementById('forcastLocation').value;
	console.log(e.value);
}

getLocationFromForm.addEventListener('submit', getLocation);
