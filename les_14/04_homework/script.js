const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "67f0e05afc2d24fac3b3c7fa155cd34e"
}


function getWeather() {
	const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&lang=ru&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}


function showWeather(data) {
	console.log(data);
	// здесь вы выводите на страницу
}

getWeather();
document.querySelector('#city').onchange = getWeather;