
// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
	const url = 'http://getpost.itgid.info/index2.php',
			auth = 'auth=DdC33D7d2C2a7',
			action1 = 'action=1',
			action2 = 'action=2';

	let responseOne = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action1}`)
			.then(response => {resolve(response.text());
		});
	});

	let responseTwo = new Promise ((resolve, reject) => {
		fetch(`${url}?${auth}&${action2}`)
			.then(response => {resolve(response.text());
		});
	});

	Promise.all([responseOne, responseTwo]).then(response => {
		document.querySelector('.out-1').innerHTML = response;
	});
	
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;
// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>
*/

function t2() {
	const url = 'http://getpost.itgid.info/index2.php',
			auth = 'auth=DdC33D7d2C2a7',
			action1 = 'action=3',
			action2 = 'action=4',
			num1 = 'num1=121',
			num2 = 'num2=211';

	let responseOne = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action1}&${num1}&${num2}`)
			.then(response => {resolve(response.text());
			});
	});
	let responseTwo = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action2}&${num1}&${num2}`)
			.then(response => {resolve(response.text());
		});
	});
	Promise.all([responseOne, responseTwo])
	.then(response => document.querySelector('.out-2').innerHTML = response);
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAllg
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
	const url = 'http://getpost.itgid.info/index2.php',
	auth = 'auth=DdC33D7d2C2a7',
	action1 = 'action=5',
	action2 = 'action=6',
	num1 = 'num1=121',
	num2 = 'num2=211';

	let responseOne = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action1}`)
			.then(response => {resolve(response.text());
		});
	});

	let responseTwo = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action2}&${num1}&${num2}`)
			.then(response => {resolve(response.text());
		});
	});

	Promise.all([responseOne, responseTwo])
	.then(response => document.querySelector('.out-3').innerHTML = response);
}

// ваше событие здесь!!!

document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
	const url = 'http://getpost.itgid.info/index2.php',
	auth = 'auth=DdC33D7d2C2a7',
	action1 = 'action=7',
	action2 = 'action=8',
	year = 'year=1989';

	let responseOne = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action1}`)
			.then(response => {resolve(response.text());
		});
	});

	let responseTwo = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action2}&${year}`)
			.then(response => {resolve(response.text());
		});
	});

	Promise.all([responseOne, responseTwo])
	.then(response => document.querySelector('.out-4').innerHTML = response);
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;
// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
	const url = 'http://getpost.itgid.info/index2.php',
	auth = 'auth=DdC33D7d2C2a7',
	action1 = 'action=1',
	action2 = 'action=2';

	let responseOne = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action1}`, {method: 'POST'})
			.then(response => {resolve(response.text());
			});
	});
	let responseTwo = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action2}`, {method: 'POST'})
			.then(response => {resolve(response.text());
		});
	});

	Promise.all([responseOne, responseTwo])
	.then(response => document.querySelector('.out-5').innerHTML = response);
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;
// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
	const url = 'http://getpost.itgid.info/index2.php',
	auth = 'auth=DdC33D7d2C2a7',
	action1 = 'action=3',
	action2 = 'action=4',
	num1 = 'num1=1123',
	num2 = 'num2=2321';

	let resposeOne = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action1}&${num1}&${num2}`, {method: 'POST'})
			.then(response => {resolve(response.text());
		});
	});
	
	let responseTwo = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action2}&${num1}&${num2}`, {method: 'POST'})
			.then(responce => {resolve(responce.text());
		});
	});

	Promise.all([resposeOne, responseTwo])
	.then(response => document.querySelector('.out-6').innerHTML = response);
}

// ваше событие здесь!!!

document.querySelector('.b-6').onclick = t6;
// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
	const url = 'http://getpost.itgid.info/index2.php',
	auth = 'auth=DdC33D7d2C2a7',
	action1 = 'action=5',
	action2 = 'action=6',
	num1 = 'num1=1123',
	num2 = 'num2=2321';

	let responseOne = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action1}`, {method: 'POST'})
		.then(response => {resolve(response.text());
		});
	});

	let responseTwo = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action2}&${num1}&${num2}`, {method: 'POST'})
		.then(response => {resolve(response.text());
		});
	});

	Promise.all([responseOne, responseTwo])
	.then(response => document.querySelector('.out-7').innerHTML = response);
}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;
// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
	const url = 'http://getpost.itgid.info/index2.php',
	auth = 'auth=DdC33D7d2C2a7',
	action1 = 'action=7',
	action2 = 'action=8',
	year = 'year=1989';

	let responseOne = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action1}`, {method: 'POST'})
			.then(response => {resolve(response.text());
		});
	});

	let responseTwo = new Promise((resolve, reject) => {
		fetch(`${url}?${auth}&${action2}`, {method: 'POST'})
		.then(response => {resolve(response.text())
		});
	});

	Promise.all([responseOne, responseTwo])
	.then(response => document.querySelector('.out-8').innerHTML = response)

}

// ваше событие здесь!!!

document.querySelector('.b-8').onclick = t8;