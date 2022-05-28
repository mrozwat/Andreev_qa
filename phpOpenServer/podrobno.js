
let elements = document.getElementsByClassName("dis"); //querySelectorAll можно было, но хз
let button = document.querySelector('.button');

button.onclick = function () {

for(let element of elements) {
   element.classList.toggle('none');
}
if( button.textContent.length > 8 ){button.textContent = 'свернуть'}
else {button.textContent = 'подробнее'}

};

//2 knopka
let elements2 = document.getElementsByClassName("dis2"); //querySelectorAll можно было, но хз
let button2 = document.querySelector('.button2');

button2.onclick = function () {

for(let element2 of elements2) {
   element2.classList.toggle('none');
if( button.textContent.length > 8 ){button.textContent = 'свернуть'}
else {button.textContent = 'подробнее'}
}
};

// Мда, не код а пздц

/*
button.onclick = function () {
for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('none');
}
};// FIX (можно сделать через for of, но я затупок, а переделывать лень )
*/