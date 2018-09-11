// Get current time:
function updatingTime() {
	const currentTime = new Date();
	let hours = currentTime.getHours() % 12;
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();

	seconds = seconds < 10 ? '0' + seconds : seconds;
	minutes = minutes < 10 ? '0' + minutes : minutes;

	let daysOfWeek = ['Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'];

	let day = daysOfWeek[currentTime.getDay()];

	let months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let month = months[currentTime.getMonth()];
	let currentDay = currentTime.getDate();
	let year = currentTime.getFullYear();

	let date = day + ', ' + month + ' ' + currentDay + ', ' + year;
	let updatingHours = hours + ':' + minutes + ':' + seconds + ' ';

	document.getElementById('date').innerHTML = date;
	document.getElementById('time').innerHTML = updatingHours;
};
setInterval(updatingTime, 1000);
