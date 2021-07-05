
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
	let out = document.querySelector('.out-1').textContent = 'touch';
}

// ваше событие здесь!!!
document.querySelector('.div-1').addEventListener('touchstart', t1)

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

function t2() {
	let out = document.querySelector('.out-2');
	out.textContent = (num2++)
}
let num2 = 0;

// ваше событие здесь!!!
document.querySelector('.div-2').addEventListener('touchstart', t2);

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3() {
	let out = document.querySelector('.out-3');
	out.textContent = this.textContent;

}

// ваше событие здесь!!!
document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
	let out = document.querySelector('.out-4')
	document.querySelector('.div-4').ontouchstart = () => {
		out.textContent += 'touch';
	};
}

// ваше событие здесь!!!
document.querySelector('.b-4').addEventListener('click', t4);


// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
	document.querySelector('.div-4').ontouchstart = '';
}

// ваше событие здесь!!!
document.querySelector('.b-5').addEventListener('click', t5);

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
	let out = document.querySelector('.out-6');
	out.textContent = 'touchend'
}

// ваше событие здесь!!!
document.querySelector('.div-4').ontouchend = t6

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {

	document.querySelector('.div-7').style.backgroundColor ='red'
}

// ваше событие здесь!!!
document.querySelector('.div-7').ontouchstart = t7;


// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8=['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {
	let min = Math.ceil(0),
		 max = Math.floor(a8.length),
		 color = Math.floor(Math.random() * (max - min)) + min;

		 document.querySelector('.div-8').style.backgroundColor =a8[color]
}

// ваше событие здесь!!!
document.querySelector('.div-8').ontouchstart = t8;

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(e) {
	let out = document.querySelector('.out-9');
	out.textContent = e.changedTouches.length
}

// ваше событие здесь!!!
document.querySelector('.div-9').ontouchstart = t9;

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

function t10() {
	i10++
	
	div.style.width = i10 + 'px';
}
let div = document.querySelector('.div-10'),
	 i10 = div.offsetWidth;
	 
// ваше событие здесь!!!
div.addEventListener('touchmove', t10);

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(e) {
	let out = document.querySelector('.out-11');
	//console.log(e)
	out.innerHTML = `
	radiusX: ${e.changedTouches[0].radiusX}<br>
	radiusY: ${e.changedTouches[0].radiusY}
	`
}

// ваше событие здесь!!!
document.querySelector('.div-11').ontouchstart = t11;


// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

function nextFunction() {
	count++

	if (count === images.length) {
		count = 0;
		images[count].classList.add('active-img');
		images[images.length-1].classList.remove('active-img');
	}

	images[count].classList.add('active-img');
	if (count != 0) images[count-1].classList.remove('active-img');
	checkAndChangeImage ();
}

function prevFunction() {
	count--

	if (count < 0) {
		count = images.length -1;
		images[count].classList.add('active-img');
		images[0].classList.remove('active-img');
	}

	images[count].classList.add('active-img');
	if (count != images.length -1) {
		images[count+1].classList.remove('active-img');
	}
	checkAndChangeImage ();
}

function checkAndChangeImage () {
	images.forEach(e => {
		if (e.classList.contains('active-img')) {
			changeSrc(e);
		}
	})
}

function resetFunction () {
	images.forEach(e => {
		if (e.classList.contains('active-img')) {
			e.classList.remove('active-img');
		}
	})
	count = 0;
	images[count].classList.add('active-img');
	checkAndChangeImage ();
}

function changeSrc (miniImage) {
	let src = document.querySelector('.div-12-max img');
	src.setAttribute('src', miniImage.getAttribute('src'));
}

// ваше событие здесь!!!
