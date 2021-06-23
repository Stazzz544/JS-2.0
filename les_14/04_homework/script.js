//============================
const container = document.querySelector('.container'),
		title = document.createElement('h1'),
		divider = document.createElement('div'),
		flexContainer = document.createElement('div'),
		flexContainerLeftSide = document.createElement('div'),
		flexContainerRightSide = document.createElement('div'),
		subtitle = document.createElement('h2'),
		select = document.createElement('select'),
		date = document.createElement('div'),
		time = document.createElement('div'),
		cities = {
			2643743: 'London',
			625144: 'Minsk',
			498817: 'Saint-Petersburg',
			703448: 'Kyiv',
		};


//add textContent
title.textContent = `Weather forecasts`;
subtitle.textContent = `chose city:`;

//time.textContent = `местное время...`;

//add classes or id

title.classList.add('title');
divider.classList.add('divider');
flexContainer.classList.add('flex-container');
flexContainerLeftSide.classList.add('flex-container__left');
flexContainerRightSide.classList.add('flex-container__right');
subtitle.classList.add('subtitle');
select.id = 'city';
date.classList.add('date');
time.classList.add('time');

//add to container
container.append(title);
container.append(divider);
container.append(flexContainer);

//add to flexContainer
flexContainer.append(flexContainerLeftSide);
flexContainer.append(flexContainerRightSide);
//leftside
flexContainerLeftSide.append(subtitle);
flexContainerLeftSide.append(select);
//rightside
flexContainerRightSide.append(date);
flexContainerRightSide.append(time);


appendCityes(cities, select);




function appendCityes (arr, addInBlock) {
	for (let key in arr) {
		addInBlock.innerHTML += `<option value="${key}">${arr[key]}</option>`;		
	}
}

//==============================



const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "67f0e05afc2d24fac3b3c7fa155cd34e"
};


function getWeather() {
	
	const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&lang=ru&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);

	
}


function showWeather(data) {
	//console.log(data);
	// здесь вы выводите на страницу
	console.log(data.timezone);
	

	//clearInterval(dateTimer);
	let timer = setInterval (() => {
		let DateParam = timeNormolize(data.timezone);
		dateToDisplay(DateParam, date);
		timeToDisplay(DateParam, time);
	}, 1000);

	

	
	

	// let nowdate = new Date();
	// nowdate = nowdate.toUTCString();
	// let day =  new Date();
	// console.log(nowdate);
	// console.log('data.dt', data.dt);
	// console.log('day:', day);

}

function dateToDisplay (DateParam, date) {
	let day = DateParam.getDate(),
		 month = DateParam.getMonth();

	month = lessThen10(month);
	day = lessThen10(day);

	date.innerHTML = `сегодня <span>${day} ${month} ${DateParam.getFullYear()}</span>`;
}


function timeToDisplay (DateParam, time) {
	let hours = DateParam.getHours(),
		 minutes = DateParam.getMinutes(),
		 seconds = DateParam.getSeconds();

	hours = lessThen10(hours);
	minutes = lessThen10(minutes);
	seconds = lessThen10(seconds);

	time.innerHTML = `time in chosen city: <br> 
	<div class ="time__out">${hours} : ${minutes} : ${seconds}</span>`;
}


function lessThen10 (num) {
	if (num < 10) num = '0'+ num;
	return num;
}


function timeNormolize (timezone) {
	let startDate = new Date(),
		 timezoneOffset = startDate.getTimezoneOffset() * 60 * 1000,
		 utfTime = new Date(+startDate + timezoneOffset),
		 timeInChosenCity = new Date (+utfTime + timezone*1000);
	
	//console.log('startDate:', startDate);
	//console.log('timezoneOffset:', timezoneOffset);
	//console.log('utfTime:', utfTime);
	

	//console.log('timeInChosenCity:', timeInChosenCity);
	return timeInChosenCity;

}




getWeather();
document.querySelector('#city').onchange = getWeather;