
let elements = document.getElementsByClassName("dis"); //querySelectorAll можно было, но хз
let button = document.querySelector('.button');

button.onclick = function () {
for(let element of elements) {
   element.classList.toggle('none');
}
if( button.textContent.length > 8 ){button.textContent = 'Свернуть'}
else {button.textContent = 'Подробнее'}
};

//2 knopka
let elements2 = document.getElementsByClassName("dis2"); //querySelectorAll можно было, но хз
let button2 = document.querySelector('.button2');

button2.onclick = function () {
for(let element2 of elements2) {
   element2.classList.toggle('none');
}
if( button2.textContent.length > 8 ){button2.textContent = 'Cвернуть'}
else {button2.textContent = 'Подробнее'}
};

// Мда, не код а пздц. Нужно переделать через индексы кнопок [0] [1], но пока и так работает (всего 2 кнопки)

/*
button.onclick = function () {
for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('none');
}
};// FIX (можно сделать через for of, но я затупок, а переделывать лень )
*/