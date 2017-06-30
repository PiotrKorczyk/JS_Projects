var hoursPointer = document.querySelector(".hours-pointer");
var minutesPointer = document.querySelector(".minutes-pointer");
var secondsPointer = document.querySelector(".seconds-pointer");


setInterval(() => {
	var date = new Date();
	console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
	let hoursDeg = 30*date.getHours() -90;
	let minutesDeg = 6*date.getMinutes() -90;
	let secondsDeg = 6*date.getSeconds() -90;
	hoursPointer.style.transform = `rotate(${hoursDeg}deg)`;
	minutesPointer.style.transform = `rotate(${minutesDeg}deg)`;
	secondsPointer.style.transform = `rotate(${secondsDeg}deg)`;
},1000);