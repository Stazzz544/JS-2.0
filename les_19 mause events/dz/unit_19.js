
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
	let out = document.querySelector('.div-1').textContent;
	document.querySelector('.out-1').innerHTML = out;
	return out;
}

// ваше событие здесь!!!
document.querySelector('.div-1').onclick = t1;


// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(event) {
	
	if (event.altKey === true) {
		document.querySelector('.out-2').innerHTML = true;
		return true;
	} else {
		document.querySelector('.out-2').innerHTML = false;
		return false;
	}
}

// ваше событие здесь!!!
document.querySelector('.div-2').onclick = t2;

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
	document.querySelector('.out-3').innerHTML = w3 + 'px';
	div3.style.width = (w3 += 5) + 'px';
}

// ваше событие здесь!!!
let div3 = document.querySelector('.div-3');
div3.onclick = t3;

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
	document.querySelector('.out-4').innerHTML = div4.textContent;
	return div4.textContent;
}

// ваше событие здесь!!!
let div4 = document.querySelector('.div-4');
div4.ondblclick = t4;


// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
	if (div5.classList.contains('active')) {
		div5.classList.remove('active');
	} else {
		div5.classList.add('active');
	}
}

// ваше событие здесь!!!
let div5 = document.querySelector('.div-5');
div5.ondblclick = t5;

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
	if (ul6.classList.contains('hide')) {
		ul6.classList.remove('hide');
	} else {
		ul6.classList.add('hide');
	}
}

// ваше событие здесь!!!
let div6 = document.querySelector('.div-6'),
	 ul6 = document.querySelector('.ul-6');
div6.ondblclick = t6;

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {
	div7.classList.toggle('active');
}

// ваше событие здесь!!!
let div7 = document.querySelector('.div-7');
div7.oncontextmenu = t7;

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8() {
	let mouse = document.querySelector('body');
	if (ch8.checked) {
		mouse.oncontextmenu = () => false;
	} else {
		mouse.oncontextmenu = () =>  true;
	}
}

// ваше событие здесь!!!
let ch8 = document.querySelector('.ch-8');
ch8.onchange = t8;

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
	let img = div9.querySelector('img');
	img.setAttribute('src', 'img/2.png');
}

// ваше событие здесь!!!
let div9 = document.querySelector('.div-9');
div9.oncontextmenu = t9;

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
	let img = div10.querySelector('img');
	img.setAttribute('src', 'img/2.png');

}

// ваше событие здесь!!!

let div10 = document.querySelector('.div-10');
div10.onmouseenter = t10;

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11() {
	let img = div11.querySelector('img');
	img.setAttribute('src', 'img/2.png');
	img.onmouseleave = () => {
		img.setAttribute('src', 'img/1.png');
	}
}

// ваше событие здесь!!!
let div11 = document.querySelector('.div-11');
div11.onmouseenter = t11;

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

function t12 () {
	div12.classList.add('active');
}

// ваше событие здесь!!!
let div12 = document.querySelector('.div-12');
div12.onmousedown = t12;

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

function t13 () {
	div13.classList.add('active');
}

function t13_1 () {
	div13.classList.remove('active');
}
// ваше событие здесь!!!
let div13 = document.querySelector('.div-13');
div13.onmousedown = t13;
div13.onmouseup = t13_1;

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
	let  div14 = document.querySelector('.div-14');
	div14.onclick = () => div14.classList.add('active');

	//document.querySelector('.div-14').classList.add('active');
}

document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

function t15() {
	div15.textContent = +div15.textContent + 1;
}
// ваше событие здесь!!!
let div15 = document.querySelector('.div-15');
div15.onmousemove = t15;


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

function t16() {
	div16.style.width = (div16.offsetWidth += 1) + 'px';
}

// ваше событие здесь!!!
let div16 = document.querySelector('.div-16');
div16.onmousemove = t16;

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
	div16.onmousemove = t16;
}
function t17Off() {
	div16.onmousemove = '';
}
// ваше событие здесь!!!
document.querySelector('.b-17_on').onclick = t17On;
// ваше событие здесь!!!
document.querySelector('.b-17_off').onclick = t17Off;


// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function t18() {
	div18.textContent = div18.offsetWidth;
}
// ваше событие здесь!!!

let div18 = document.querySelector('.div-18');
div18.onmouseenter = t18;

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19() {
	div19.textContent = div19.getAttribute('class')
}
// ваше событие здесь!!!
let div19 = document.querySelector('.div-19');
div19.onmouseout = t19;

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

function t20() {
	prog.value += 1;
}
// ваше событие здесь!!!
let prog = document.querySelector('progress');
prog.onmousemove = t20;