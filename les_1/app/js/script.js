console.log('Hello!'); // строки берем в кавычки
console.log("world");
console.log("3333");
console.log(334);
console.log('Hello' + 'world'); // конкатенация
console.log('Hello' + ' world'); // конкатенация
console.log('Hello ' + 'world'); // конкатенация
console.log('Hello' + ' ' + 'world'); // конкатенация
console.info('Hello');
// alert('Hello');
// alert('Hello'); // ctrl+l
// alert('Hello');

const out = document.getElementById('out');
console.info(out);

out.innerHTML = 'Замена!!!'
out.style.textAlign = 'center';

document.querySelector('.header').style.color = 'green'
document.gete