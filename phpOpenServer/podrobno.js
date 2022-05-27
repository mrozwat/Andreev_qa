
let elements = document.getElementsByClassName("dis");
let button = document.querySelector('.button');
button.onclick = function () {

for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('none');
}
};