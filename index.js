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
const locations = [];
let locationList = document.querySelector('.query-locations');

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
const getLocationFromForm = document.querySelector('.query-locations');

function getLocation(e) {
	e.preventDefault();
	const text = (this.querySelector('[name=location]')).value;
	console.log(text);
	const locations = text;
	loadLocation(locations, locationList);
	this.reset();
}

function loadLocation(locations = [], locationList) {

}

getLocationFromForm.addEventListener('submit', getLocation, true);
loadLocation(locations, locationList);
